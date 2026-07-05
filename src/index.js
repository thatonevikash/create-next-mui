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
];

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
  const files = ["package.json", "package-lock.json"];

  await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(targetProjectDir, file);

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
    }),
  );
}

// ----------------------------------------------------------------------

async function main() {
  console.clear();

  p.intro(color.bgBlue(color.white("  create-next-mui  ")));

  // ----------------------------------------------------------------------
  // Add Feature Command
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

    // Verify package.json exists
    try {
      await fs.access(path.join(projectRoot, "package.json"));
    } catch {
      p.cancel(
        "No package.json found.\nRun this command inside a Next.js project.",
      );
      process.exit(1);
    }

    // Detect language
    let language = "js";

    try {
      await fs.access(path.join(projectRoot, "tsconfig.json"));
      language = "ts";
    } catch {
      // JavaScript project
    }

    const featureDir = path.resolve(
      __dirname,
      "..",
      "next-mui-features",
      featureName,
      language,
    );

    // Verify feature exists
    try {
      await fs.access(featureDir);
    } catch {
      p.cancel(
        `Feature "${featureName}" does not support ${language.toUpperCase()}.`,
      );
      process.exit(1);
    }

    const spinner = p.spinner();

    spinner.start(`Installing ${featureName}...`);

    try {
      await fs.cp(featureDir, projectRoot, {
        recursive: true,
        force: true,
        filter: (src) => {
          const name = path.basename(src);

          return !["node_modules", ".next", "out", "build"].includes(name);
        },
      });

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

  // --------------------------------------------------------------------
  // Paths
  // --------------------------------------------------------------------

  const baseTemplateDir = path.resolve(
    __dirname,
    "..",
    "next-mui-templates",
    `base-${project.language}`,
  );

  const targetProjectDir = path.resolve(process.cwd(), project.name);

  const packageName = getPackageName(project.name, targetProjectDir);

  // --------------------------------------------------------------------
  // Current directory validation
  // --------------------------------------------------------------------

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

  // --------------------------------------------------------------------

  const s = p.spinner();

  s.start("Scaffolding your Next.js + MUI workspace...");

  try {
    // ------------------------------------------------------------------
    // Copy base template
    // ------------------------------------------------------------------

    await fs.cp(baseTemplateDir, targetProjectDir, {
      recursive: true,
      filter: (src) => {
        const name = path.basename(src);

        return !["node_modules", ".next", "out", "build"].includes(name);
      },
    });

    // ------------------------------------------------------------------
    // Apply selected features
    // ------------------------------------------------------------------

    for (const feature of project.features) {
      const featureDir = path.resolve(
        __dirname,
        "..",
        "next-mui-features",
        feature,
        project.language,
      );

      await fs.cp(featureDir, targetProjectDir, {
        recursive: true,
        filter: (src) => {
          const name = path.basename(src);

          return !["node_modules", ".next", "out", "build"].includes(name);
        },
      });
    }

    // ------------------------------------------------------------------

    await updateProjectName(targetProjectDir, packageName);

    s.stop(color.green("Workspace scaffolded successfully!"));
  } catch (error) {
    s.stop(color.red("Failed to scaffold workspace."));

    p.note(color.yellow(error.message), "Troubleshooting");

    process.exit(1);
  }

  // --------------------------------------------------------------------

  const cd =
    project.name === "." ? "" : `${color.cyan(`cd ${project.name}`)}\n`;

  p.note(
    `${cd}${color.cyan("npm install")}\n${color.cyan("npm run dev")}`,
    "Next Steps",
  );

  p.outro("✨ Build clean and fast with create-next-mui!");
}

main().catch(console.error);
