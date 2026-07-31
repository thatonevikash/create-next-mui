#!/usr/bin/env node

import * as p from "@clack/prompts";
import color from "picocolors";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// ----------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const command = args[0];
const featureName = args[1];

const positionalArgs = args.filter(
  (arg) => !["--yes", "-y", "--js"].includes(arg),
);

const PROJECT_NAME = positionalArgs[0];
const hasInitialProjectName = PROJECT_NAME !== undefined;

const hasYesFlag = args.includes("--yes") || args.includes("-y");
const hasJsFlag = args.includes("--js");

const DEFAULT_LANGUAGE = hasJsFlag ? "js" : "ts";

// ----------------------------------------------------------------------

const LANG = [
  {
    value: "ts",
    label: "TypeScript (Recommended)",
    hint: "Strict typings, clean architecture",
  },
  {
    value: "js",
    label: "JavaScript",
    hint: "Vanilla JS configuration",
  },
];

const FEATURES = [
  {
    value: "react-query",
    label: "React Query",
    hint: "TanStack Query configuration",
  },
  {
    value: "zustand",
    label: "Zustand",
    hint: "Lightweight global state management",
  },
  {
    value: "oxlint",
    label: "Oxlint",
    hint: "Fast lint errors in no-time",
  },
];

// ----------------------------------------------------------------------
// Helper Functions
// ----------------------------------------------------------------------

function validateProjectName(value) {
  if (value.length === 0) return "Project name is required!";

  if (value !== "." && value.match(/[^a-zA-Z0-9-_]/g)) {
    return "Keep it URL safe or use '.' for the current folder";
  }
}

function getPackageName(projectName, targetProjectDir) {
  const rawName =
    projectName === "." ? path.basename(targetProjectDir) : projectName;

  return rawName.toLowerCase();
}

async function updateProjectName(targetProjectDir, packageName) {
  const filePath = path.join(targetProjectDir, "package.json");
  try {
    const content = await fs.readFile(filePath, "utf8");
    const json = JSON.parse(content);
    json.name = packageName;

    if (json.packages?.[""]?.name) {
      json.packages[""].name = packageName;
    }
    await fs.writeFile(filePath, `${JSON.stringify(json, null, 2)}\n`);
  } catch (error) {
    if (error.code === "ENOENT") return;
    throw error;
  }
}

async function mergePackageJson(targetProjectDir, manifest) {
  const filePath = path.join(targetProjectDir, "package.json");
  try {
    const content = await fs.readFile(filePath, "utf8");
    const json = JSON.parse(content);

    json.dependencies = {
      ...json.dependencies,
      ...(manifest.dependencies || {}),
    };

    json.devDependencies = {
      ...json.devDependencies,
      ...(manifest.devDependencies || {}),
    };

    await fs.writeFile(filePath, `${JSON.stringify(json, null, 2)}\n`);
  } catch (error) {
    if (error.code === "ENOENT") return;
    throw error;
  }
}

async function injectProviderToLayout(targetProjectDir, manifest, language) {
  const ext = language === "ts" ? "tsx" : "jsx";
  const layoutPath = path.join(targetProjectDir, "src", "app", `layout.${ext}`);

  try {
    let content = await fs.readFile(layoutPath, "utf8");

    // 1. Inject the Import Line safely below the last import
    if (manifest.importLine && !content.includes(manifest.importLine)) {
      const lines = content.split("\n");
      const lastImportIndex = lines.findLastIndex((line) =>
        line.trim().startsWith("import"),
      );

      if (lastImportIndex !== -1) {
        lines.splice(lastImportIndex + 1, 0, manifest.importLine);
        content = lines.join("\n");
      } else {
        content = `${manifest.importLine}\n${content}`;
      }
    }

    // 2. Wrap {children} dynamically
    if (manifest.expression) {
      const openTag = manifest.expression.open;
      const closeTag = manifest.expression.close;

      if (!content.includes(openTag)) {
        content = content.replace(
          /(\>\s*)\{\s*children\s*\}(\s*\<)/,
          `$1${openTag} {children} ${closeTag}$2`,
        );
      }
    }

    await fs.writeFile(layoutPath, content, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") return;
    throw error;
  }
}

async function applyFeature(feature, targetProjectDir, language) {
  const featureDir = path.resolve(
    __dirname,
    "..",
    "next-mui-features",
    feature,
  );
  const manifestPath = path.join(featureDir, "manifest.json");
  const ext = language == "ts" ? "tsx" : "jsx";

  let manifest = {};
  try {
    const manifestContent = await fs.readFile(manifestPath, "utf8");
    manifest = JSON.parse(manifestContent);
  } catch {
    // Fail-safe if manifest is missing or malformed
    return;
  }

  // 1. Copy feature-specific files from the language subdirectory
  if (manifest.files) {
    for (const file of manifest.files) {
      let srcPath;
      let destPath;

      if (file.root) {
        srcPath = path.resolve(featureDir, `${file.src}`);
        destPath = path.resolve(targetProjectDir, `${file.dest}`);
      } else {
        srcPath = path.resolve(featureDir, language, `${file.src}.${ext}`);
        destPath = path.resolve(targetProjectDir, `${file.dest}.${ext}`);
      }

      await fs.mkdir(path.dirname(destPath), { recursive: true });
      await fs.copyFile(srcPath, destPath);
    }
  }

  // 2. Merge dependencies into package.json
  await mergePackageJson(targetProjectDir, manifest);

  // 3. Perform dynamic layout file nesting
  await injectProviderToLayout(targetProjectDir, manifest, language);
}

async function restoreGitignore(targetProjectDir) {
  const shipped = path.join(targetProjectDir, "gitignore");
  const proper = path.join(targetProjectDir, ".gitignore");

  try {
    await fs.rename(shipped, proper);
  } catch (error) {
    if (error.code === "ENOENT") return; // template had no gitignore
    throw error;
  }
}

// ----------------------------------------------------------------------
// Main Execution Control Loop
// ----------------------------------------------------------------------

async function main() {
  console.clear();

  p.intro(color.bgBlue(color.white("  create-next-mui  ")));

  // ----------------------------------------------------------------------
  // Add Feature Command Pipeline
  // ----------------------------------------------------------------------

  if (command === "add") {
    if (!featureName) {
      p.cancel(
        "Please specify a feature.\n\nExample:\ncreate-next-mui add react-query",
      );
      process.exit(1);
    }

    if (!FEATURES.some((f) => f.value === featureName)) {
      p.cancel(`Unknown feature "${featureName}".`);
      process.exit(1);
    }

    const projectRoot = process.cwd();

    // Verify package.json exists in target execution environment
    try {
      await fs.access(path.join(projectRoot, "package.json"));
    } catch {
      p.cancel(
        "No package.json found.\nRun this command inside a Next.js project.",
      );
      process.exit(1);
    }

    // Auto-detect layout flavor via tsconfig existence
    let language = "js";
    try {
      await fs.access(path.join(projectRoot, "tsconfig.json"));
      language = "ts";
    } catch {
      // Keep fallback as js configuration
    }

    const spinner = p.spinner();
    spinner.start(`Installing ${featureName}...`);

    try {
      await applyFeature(featureName, projectRoot, language);

      spinner.stop(color.green(`${featureName} installed successfully.`));
      p.note(`${color.cyan("npm install")}`, "Next Step");
      p.outro(`✨ ${featureName} added successfully!`);
      return;
    } catch (error) {
      spinner.stop(color.red("Failed to install feature."));
      p.note(error.message, "Error");
      process.exit(1);
    }
  }

  // ----------------------------------------------------------------------
  // Interactive Fresh Workspace Scaffolding Pipeline
  // ----------------------------------------------------------------------

  const projectNameError = hasInitialProjectName
    ? validateProjectName(PROJECT_NAME)
    : undefined;

  if (projectNameError) {
    p.cancel(projectNameError);
    process.exit(1);
  }

  const project = await p.group(
    {
      name: () =>
        hasInitialProjectName
          ? Promise.resolve(PROJECT_NAME)
          : p.text({
              message: "What is your project name?",
              placeholder: "my-next-mui-app (or '.' for current directory)",
              validate: validateProjectName,
            }),

      language: () =>
        hasYesFlag
          ? Promise.resolve(DEFAULT_LANGUAGE)
          : p.select({
              message: "Choose your language flavor:",
              options: LANG,
            }),

      features: () =>
        hasYesFlag
          ? Promise.resolve([])
          : p.multiselect({
              message: "Select optional features:",
              required: false,
              options: FEATURES,
            }),
    },
    {
      onCancel: () => {
        p.cancel("Scaffolding cancelled. See you next time!");
        process.exit(0);
      },
    },
  );

  const baseTemplateDir = path.resolve(
    __dirname,
    "..",
    "next-mui-templates",
    `base-${project.language}`,
  );

  const targetProjectDir = path.resolve(process.cwd(), project.name);
  const packageName = getPackageName(project.name, targetProjectDir);

  if (project.name === ".") {
    try {
      const files = await fs.readdir(targetProjectDir);
      if (files.length > 0) {
        p.log.error(
          color.red(
            "The current directory is not empty! Please clear it or specify another project name.",
          ),
        );
        process.exit(1);
      }
    } catch {
      process.exit(1);
    }
  }

  const s = p.spinner();
  s.start("Staging your Next.js + MUI workspace...");

  try {
    // 1. Unpack base layout system
    await fs.cp(baseTemplateDir, targetProjectDir, {
      recursive: true,
      filter: (src) => {
        const name = path.basename(src);
        return ![
          "node_modules",
          ".next",
          "out",
          "build",
          "package-lock.json",
        ].includes(name);
      },
    });

    // 1b. npm strips real .gitignore files at publish time —
    // template ships it dot-less, restore it here.
    await restoreGitignore(targetProjectDir);

    // 2. Map and loop over chosen features sequentially
    for (const feature of project.features) {
      await applyFeature(feature, targetProjectDir, project.language);
    }

    // 3. Finalize package.json configuration naming
    await updateProjectName(targetProjectDir, packageName);

    s.stop(color.green("Workspace built successfully!"));
  } catch (error) {
    s.stop(color.red("Failed to build workspace!"));
    p.note(color.yellow(error.message), "Troubleshooting");
    process.exit(1);
  }

  const cd =
    project.name === "." ? "" : `${color.cyan(`cd ${project.name}`)}\n`;

  p.note(
    `${cd}${color.cyan("npm install")}\n${color.cyan("npm run dev")}`,
    "Next Steps",
  );

  p.outro("✨ Build clean and fast with create-next-mui!");
}

main().catch(console.error);
