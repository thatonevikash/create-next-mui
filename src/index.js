#!/usr/bin/env node

import * as p from "@clack/prompts";
import color from "picocolors";
import degit from "degit";
import path from "node:path";

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

  // Set up target directory path
  const targetDir = path.resolve(process.cwd(), project.name);

  // Start the actual template download spinner
  const s = p.spinner();
  s.start("Cloning the perfect Next.js + MUI foundation...");

  // Define your GitHub template repository source
  // Format: username/repo#branch
  const branch = project.language === "ts" ? "main" : "javascript";

  // 💡 REPLACE 'thatonevikash' WITH YOUR ACTUAL GITHUB USERNAME LATER
  const repoSource = `thatonevikash/next-mui-template#${branch}`;

  try {
    const emitter = degit(repoSource, {
      cache: false,
      force: true,
    });

    // Execute download to target folder
    await emitter.clone(targetDir);
    s.stop(color.green("Template downloaded successfully!"));
  } catch (error) {
    s.stop(color.red("Failed to clone template."));
    p.note(
      color.yellow(
        `Ensure the repository github.com/${repoSource.split("#")[0]} exists and has a '${branch}' branch.\n\nError: ${error.message}`,
      ),
      "Troubleshooting:",
    );
    process.exit(1);
  }

  // Success messaging
  p.note(
    `${color.cyan(`cd ${project.name}`)}\n${color.cyan("npm install")}\n${color.cyan("npm run dev")}`,
    "Next Steps to Get Started:",
  );

  p.outro(`✨ Your workspace is ready. Build something legendary!`);
}

main().catch(console.error);
