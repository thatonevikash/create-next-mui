#!/usr/bin/env node

import * as p from "@clack/prompts";
import color from "picocolors";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the directory where this CLI package actually lives on the user's system
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const initialProjectName = process.argv[2];
const hasInitialProjectName = typeof initialProjectName === "string";

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

async function main() {
  console.clear();
  p.intro(color.bgBlue(color.white("  create-next-mui  ")));

  const projectNameError = hasInitialProjectName
    ? validateProjectName(initialProjectName)
    : undefined;

  if (projectNameError) {
    p.cancel(projectNameError);
    process.exit(1);
  }

  const project = await p.group(
    {
      name: () =>
        hasInitialProjectName
          ? Promise.resolve(initialProjectName)
          : p.text({
              message: "What is your project name?",
              placeholder: "my-next-mui-app (or '.' for current directory)",
              validate: validateProjectName,
            }),
      language: () =>
        p.select({
          message: "Choose your language flavor:",
          options: [
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
          ],
        }),
    },
    {
      onCancel: () => {
        p.cancel("Scaffolding cancelled. See you next time!");
        process.exit(0);
      },
    },
  );

  // Define local source paths (inside this CLI package folder)
  const templateFolderName =
    project.language === "ts" ? "next-mui-template-ts" : "next-mui-template-js";
  const sourceTemplateDir = path.resolve(__dirname, "..", templateFolderName);

  // Define destination paths (where the user is running the command)
  const targetProjectDir = path.resolve(process.cwd(), project.name);
  const packageName = getPackageName(project.name, targetProjectDir);

  // If targeting current directory, make sure it's clean
  if (project.name === ".") {
    try {
      const existingFiles = await fs.readdir(targetProjectDir);
      if (existingFiles.length > 0) {
        p.log.error(
          color.red(
            "The current directory is not empty! Please clear it or specify a project name.",
          ),
        );
        process.exit(1);
      }
    } catch (err) {
      // If the directory reading fails completely, we exit safely
      process.exit(1);
    }
  }

  const s = p.spinner();
  s.start("Unboxing your Next.js + MUI foundation locally...");

  try {
    // Native high-speed recursive copy
    await fs.cp(sourceTemplateDir, targetProjectDir, {
      recursive: true,
      filter: (src) => {
        const targetName = path.basename(src);
        return (
          targetName !== "node_modules" &&
          targetName !== ".next" &&
          targetName !== "out" &&
          targetName !== "build"
        );
      },
    });
    await updateProjectName(targetProjectDir, packageName);

    s.stop(color.green("Workspace scaffolded successfully!"));
  } catch (error) {
    s.stop(color.red("Failed to build workspace structure."));
    p.note(color.yellow(`Error details: ${error.message}`), "Troubleshooting:");
    process.exit(1);
  }

  // Clear instructions for the developer
  const isCurrentDir = project.name === ".";
  const cdInstruction = isCurrentDir
    ? ""
    : `${color.cyan(`cd ${project.name}`)}\n`;

  p.note(
    `${cdInstruction}${color.cyan("npm install")}\n${color.cyan("npm run dev")}`,
    "Next Steps to Get Started:",
  );

  p.outro(`✨ Code cleanly, sort perfectly. Built with create-next-mui!`);
}

main().catch(console.error);
