<!-- ========================================================= -->
<!--                          LOGO                             -->
<!-- ========================================================= -->

<p align="center">
  <img src="https://github.com/user-attachments/assets/3cc098d6-b3cd-4881-a000-ff932cafa756" alt="create-next-mui Logo" width="180" />
</p>

<h1 align="center">create-next-mui</h1>

<p align="center">
  The fastest way to scaffold <strong>Next.js + Material UI</strong> applications.
</p>

<p align="center">
  Skip repetitive setup and start building with a production-ready foundation in seconds.
</p>

<p align="center">

[![npm version](https://img.shields.io/npm/v/create-next-mui?style=flat&logo=npm&color=CB3837)](https://www.npmjs.com/package/create-next-mui)
[![npm downloads](https://img.shields.io/npm/dm/create-next-mui?style=flat&logo=npm)](https://www.npmjs.com/package/create-next-mui)
[![Next.js](https://img.shields.io/badge/Next.js-v16-black?style=flat&logo=nextdotjs)](https://nextjs.org/)
[![Material UI](https://img.shields.io/badge/MUI-v9-007FFF?style=flat&logo=mui)](https://mui.com/)
[![License](https://img.shields.io/github/license/thatonevikash/create-next-mui)](LICENSE)

</p>

---

<!-- ========================================================= -->
<!--                         BANNER                            -->
<!-- ========================================================= -->

<p align="center">
  <img width="1620" height="660" alt="next-mui-banner" src="https://github.com/user-attachments/assets/a6774a2e-32ca-4ed3-92a7-4d9b2eae2c8d" />
</p>

---

## ✨ Why create-next-mui?

Starting every new **Next.js + Material UI** project often means repeating the same setup:

- Install Material UI & Emotion
- Configure Material UI App Router integration & Theme Provider
- Set up Linters (Oxlint / ESLint Flat Config)
- Organize scalable directory structure
- Configure state management & data fetching tools

**create-next-mui** automates all of that.

Generate a clean, scalable, production-ready project so you can focus on building your application—not configuring it.

---

# 🚀 Features

- ⚡ **Next.js App Router** (Next.js 16)
- 🎨 **Material UI v9** (`@mui/material-nextjs` integration)
- 📦 **TypeScript & JavaScript** templates
- 🔍 **Linter Choices**: Fast Oxlint or ESLint Flat Config
- 🧩 **Modular Feature & Plugin System**
- 📁 **Scalable project structure**
- ⚡ **Automated dependency installation** option
- 💚 **Zero global installation required**

---

# ⚡ Quick Start

Create a new project:

```bash
npx create-next-mui my-app
```

or

```bash
npm init next-mui my-app
```

Then start developing:

```bash
cd my-app
npm install # (if not auto-installed)
npm run dev
```

---

# 🎯 Interactive Setup

Run the CLI without arguments or with a project name to start the interactive prompt flow:

```bash
npx create-next-mui
```

The CLI will guide you step-by-step:

1. **Project Name**: Choose your directory name (or `.` for the current directory)
2. **Language**:
   - `TypeScript` (Recommended)
   - `JavaScript`
3. **Linter**:
   - `Oxlint` (Recommended - fast lint checks)
   - `ESLint` (Flat Config with perfectionist & unused-imports rules)
   - `None` (Skip linter configuration)
4. **Optional Features**:
   - `React Query` (TanStack Query setup and provider)
   - `Zustand` (Global state management store example)
5. **Auto Install**: Choose whether to install packages immediately
6. **Summary Confirmation**: Review choices before scaffolding

---

# ⚡ Non-Interactive Mode

Ideal for automation, scripts, and CI/CD pipelines.

```bash
npx create-next-mui my-app --yes
```

or

```bash
npx create-next-mui my-app -y
```

Flag options:

- `--yes` / `-y`: Skips prompts, defaults to TypeScript, Oxlint, and skips auto installation.
- `--js`: When combined with `-y`, defaults to JavaScript template.

```bash
npx create-next-mui my-app -y --js
```

---

# 🧩 Feature & Plugin CLI

Add features and tools directly to an existing Next.js + MUI project created with `create-next-mui`:

### React Query (TanStack Query)

```bash
npx create-next-mui add react-query
```

### Zustand

```bash
npx create-next-mui add zustand
```

### Oxlint

```bash
npx create-next-mui add oxlint
```

### ESLint

```bash
npx create-next-mui add eslint
```

Plugins automatically configure dependencies, copy required source files, and inject providers into your root layout.

---

# 📦 Available Templates

## TypeScript

Recommended for most projects.

- Full TypeScript support with strict types
- Material UI theme definitions & Next.js App Router setup
- Pre-configured `tsconfig.json`

---

## JavaScript

Ideal for vanilla JavaScript workflows.

- Modern ECMAScript setup
- Material UI App Router configuration
- Clean folder structure

---

# 📁 Project Structure

```text
my-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx (or .jsx)
│   │   └── page.tsx (or .jsx)
│   ├── components/
│   └── theme/
├── package.json
├── next.config.ts (or .js)
└── README.md
```

---

# 📚 What's Included?

| Feature                  | Description                                                                    |
| ------------------------ | ------------------------------------------------------------------------------ |
| **Next.js App Router**   | Latest App Router architecture                                                 |
| **Material UI v9**       | Material UI integration with `@mui/material-nextjs`                            |
| **Theme Configuration**  | Pre-configured theme and ThemeProvider                                         |
| **Emotion**              | Integrated CSS-in-JS support                                                   |
| **Linters**              | Oxlint or ESLint Flat Config options                                           |
| **State / Data Plugins** | Zustand & TanStack React Query integration support                             |
| **Clean Output**         | Build artifacts, `.next`, caches, and lockfiles are omitted during scaffolding |

---

# 🖥 CLI Reference

| Command                               | Description                           |
| ------------------------------------- | ------------------------------------- |
| `npx create-next-mui`                 | Interactive project creation          |
| `npx create-next-mui <project-name>`  | Create a project with a specific name |
| `npm init next-mui`                   | Alternative project creation command  |
| `-y`, `--yes`                         | Skip prompts and use defaults         |
| `--js`                                | Use JavaScript template with `-y`     |
| `npx create-next-mui add react-query` | Add React Query to current project    |
| `npx create-next-mui add zustand`     | Add Zustand to current project        |
| `npx create-next-mui add oxlint`      | Add Oxlint to current project         |
| `npx create-next-mui add eslint`      | Add ESLint to current project         |

---

# 🤝 Contributing

Contributions are always welcome!

- Report bugs & issues
- Suggest features or improvements
- Submit pull requests

Feel free to open an issue or pull request on [GitHub](https://github.com/thatonevikash/create-next-mui).

---

# 📖 Learn More

- 🚀 [Introducing create-next-mui v0.1.0](https://dev.to/thatonevikash/stop-manual-boilerplate-scaffolding-nextjs-with-mui-1l60)
- 🤩 [create-next-mui v0.2.0 — Plugin Support](https://dev.to/thatonevikash/create-next-mui-v020-is-here-now-with-plugin-support-4l70)
- 🌐 [Website / Documentation](https://create-next-mui.vercel.app/)

---

# ⭐ Support the Project

If **create-next-mui** helps you build projects faster, consider giving it a ⭐ on [GitHub](https://github.com/thatonevikash/create-next-mui)!

---

# 📄 License

This project is licensed under the **MIT License**.
