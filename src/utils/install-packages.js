import { spawn } from "node:child_process";

// ----------------------------------------------------------------------

export function runner(command, args, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      shell: process.platform === "win32",
      stdio: "pipe",
    });

    let stderr = "";
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("error", reject);

    child.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(
          new Error(stderr.trim() || `${command} exited with code ${code}`),
        );
      }
    });
  });
}

// ----------------------------------------------------------------------

export async function installPackages(targetProjectDir, manifest) {
  const dependencies = Object.entries(manifest.dependencies ?? {}).map(
    ([name, version]) => `${name}@${version}`,
  );

  const devDependencies = Object.entries(manifest.devDependencies ?? {}).map(
    ([name, version]) => `${name}@${version}`,
  );

  if (dependencies.length) {
    await runner("npm", ["install", ...dependencies], targetProjectDir);
  }

  if (devDependencies.length) {
    await runner(
      "npm",
      ["install", "-D", ...devDependencies],
      targetProjectDir,
    );
  }
}
