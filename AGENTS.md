# Agent Guide

## Repository Purpose

`create-next-mui` is an ESM Node CLI that scaffolds Next.js App Router + Material UI projects. It also ships optional feature installers and a separate documentation app.

The main package is published from the repository root. The package `files` field includes only `src`, `next-mui-templates`, and `next-mui-features`, so changes outside those paths do not affect the published CLI unless package metadata or docs are involved.

## Important Paths

- `src/index.js`: CLI entry point. Handles argument parsing, interactive prompts, fresh project scaffolding, and `add <feature>` installation.
- `src/utils/install-packages.js`: small spawn wrapper used for `npm install`.
- `next-mui-templates/base-ts`: generated TypeScript app template.
- `next-mui-templates/base-js`: generated JavaScript app template.
- `next-mui-features/*/manifest.json`: feature installer metadata. Dependencies, scripts, copied files, imports, and layout wrappers are driven from these manifests.
- `next-mui-features/*/{ts,js}`: language-specific feature source files copied into generated projects.
- `next-mui-features/*/source`: root-level config files copied by features such as `oxlint` and `eslint`.
- `docs`: independent Next.js + Fumadocs documentation app.
- `docs/content/docs`: MDX documentation content.

## CLI Behavior

- Root package uses `"type": "module"` and exposes `create-next-mui` through `./src/index.js`.
- Fresh scaffolding copies `next-mui-templates/base-${language}` into the target directory with `fs.cp`.
- Template `gitignore` files intentionally ship without the leading dot because npm strips `.gitignore` from packages. `restoreGitignore()` renames `gitignore` to `.gitignore` after scaffolding.
- Non-interactive mode is `--yes` or `-y`. Defaults are TypeScript, Oxlint, no optional features, and no auto-install.
- `--js` only changes the default language when used with non-interactive mode.
- `add <feature>` runs in the current working directory, requires an existing `package.json`, and detects TypeScript by checking for `tsconfig.json`.

## Feature System

Feature manifests are the contract between the CLI and generated projects.

- `dependencies`, `devDependencies`, and `scripts` are merged into the target `package.json`.
- Dependency keys are sorted alphabetically after merge.
- Scripts are shallow-merged without sorting.
- Manifest files without `root: true` are copied from `next-mui-features/<feature>/<language>/<src>.<tsx|jsx>` to `<dest>.<tsx|jsx>`.
- Manifest files with `root: true` are copied directly from `next-mui-features/<feature>/<src>` to `<dest>`.
- `importLine` is inserted after the last import in `src/app/layout.tsx` or `layout.jsx`.
- `expression.open` and `expression.close` wrap the first `{children}` occurrence matched by the layout replacement regex.

When adding or changing a feature, update both language variants when applicable and verify the manifest paths match the actual files.

## Template Rules

- Keep TypeScript and JavaScript templates behaviorally aligned unless intentionally changing only one language.
- If a dependency version changes in one base template, check the other base template and related feature manifests.
- Generated app paths use the `@/*` alias from the template config.
- Template package names are placeholders. The CLI rewrites `package.json.name` after scaffolding.
- Avoid committing generated artifacts such as `.next`, `out`, `build`, `node_modules`, or scaffold test apps.

## Docs App

- The docs app is separate from the published CLI package.
- It uses Next.js, Fumadocs, Tailwind CSS, and MDX content under `docs/content/docs`.
- `docs/source.config.ts` defines the Fumadocs source collection.
- `docs/src/app/llms.txt`, `llms-full.txt`, and `llms.mdx` routes expose documentation content for LLM consumption.
- Use `npm run docs:dev` from the root to start the docs app.

## Common Commands

Run from the repository root unless noted otherwise.

```bash
npm run lint
node --check src/index.js
npm run start -- my-app --yes
npm run start -- my-app --yes --js
npm run docs:dev
```

For scaffold smoke tests, run the CLI inside a temporary empty directory so generated projects do not pollute the repo. If a scaffolded app should be fully checked, install dependencies inside that generated app and run its `npm run build` or `npm run lint`.

Docs checks run inside `docs`:

```bash
npm run types:check --prefix docs
npm run build --prefix docs
```

## Development Notes

- Prefer `rg` or `rg --files` for repo inspection.
- Use structured JSON parsing for package and manifest edits; avoid manual string manipulation of JSON.
- Preserve existing formatting style in touched files. Most source uses double quotes and semicolons; some docs config files currently use single quotes.
- Do not normalize unrelated README or docs text while making code changes. Some existing content contains mojibake; fix it only when the task is about copy or documentation quality.
- Be careful with `console.clear()` in the CLI when debugging, because it hides previous output in interactive runs.
- The CLI currently has no dedicated test suite. Lean on linting, syntax checks, and temporary scaffold smoke tests for verification.

## High-Risk Areas

- Layout provider injection is regex-based. Changes to template layout formatting can break feature wrapping.
- Feature installation silently returns if a manifest is missing or malformed. Validate manifests explicitly when editing feature behavior.
- `add <feature>` language detection only checks for `tsconfig.json`; mixed or unusual projects may be detected as JavaScript.
- `fs.cp` excludes common build folders and `package-lock.json` by basename. If templates add new generated artifacts, update this filter.
- `install-packages.js` captures only stderr. Commands that fail with useful stdout may produce sparse error messages.
