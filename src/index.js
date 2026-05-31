#!/usr/bin/env node

import * as p from "@clack/prompts";
import color from "picocolors";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the directory where this CLI package actually lives on the user's system
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  console.clear();
  p.intro(color.bgBlue(color.white("  create-next-mui  ")));

  const project = await p.group(
    {
      name: () =>
        p.text({
          message: "What is your project name?",
          placeholder: "my-next-mui-app",
          validate(value) {
            if (value.length === 0) return "Project name is required!";
            if (value.match(/[^a-zA-Z0-9-_]/g))
              return "Keep it URL safe (no spaces or special chars)";
          },
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

  const s = p.spinner();
  s.start("Unboxing your Next.js + MUI foundation locally...");

  try {
    // Native high-speed recursive copy
    await fs.cp(sourceTemplateDir, targetProjectDir, {
      recursive: true,
      filter: (src) => !src.includes("node_modules") && !src.includes(".next"),
    });

    s.stop(color.green("Workspace scaffolded successfully!"));
  } catch (error) {
    s.stop(color.red("Failed to build workspace structure."));
    p.note(color.yellow(`Error details: ${error.message}`), "Troubleshooting:");
    process.exit(1);
  }

  // Clear instructions for the developer
  p.note(
    `${color.cyan(`cd ${project.name}`)}\n${color.cyan("npm install")}\n${color.cyan("npm run dev")}`,
    "Next Steps to Get Started:",
  );

  p.outro(`✨ Code cleanly, sort perfectly. Built with create-next-mui!`);
}

main().catch(console.error);
