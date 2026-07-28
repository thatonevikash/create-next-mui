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

- Install Material UI
- Configure Theme Provider
- Set up Emotion
- Configure ESLint
- Organize folders
- Install common libraries

**create-next-mui** automates all of that.

Generate a clean, scalable, production-ready project so you can focus on building your application—not configuring it.

---

# 🚀 Features

- ⚡ Next.js App Router
- 🎨 Material UI v9
- 📦 TypeScript & JavaScript templates
- 🧹 ESLint Flat Config
- 📁 Scalable project structure
- 🧩 Plugin system
- 💚 Zero global installation
- 🚀 Production-ready setup

---

# ⚡ Quick Start

Create a new project.

```bash
npx create-next-mui my-app
```

or

```bash
npm init next-mui
```

Then start developing.

```bash
cd my-app
npm install
npm run dev
```

---

# 🎯 Interactive Setup

Run the CLI without a project name.

```bash
npx create-next-mui
```

The CLI will guide you through each step interactively.

Current options include:

### Project Name

Choose your application name.

### Language

- TypeScript (Recommended)
- JavaScript

### Optional Features

- Zustand
- React Query (TanStack Query)

---

# ⚡ Non-Interactive Mode

Perfect for automation, CI/CD pipelines, or quickly generating projects.

```bash
npx create-next-mui my-app --yes
```

or

```bash
npx create-next-mui my-app -y
```

This automatically:

- Uses the provided project name
- Selects the TypeScript template
- Skips all prompts
- Generates the project immediately

---

# 🧩 Plugin System

One of the biggest advantages of **create-next-mui** is its plugin system.

Instead of generating dozens of templates, install only the features you need.

## Install Zustand

```bash
npx create-next-mui add zustand
```

## Install React Query

```bash
npx create-next-mui add react-query
```

Plugins integrate directly into your existing project with the recommended configuration.

More plugins are planned.

---

# 📦 Available Templates

## TypeScript

Recommended for most projects.

Includes:

- TypeScript
- Strict typing
- Material UI theme typings
- ESLint Flat Config

---

## JavaScript

Perfect if you prefer JavaScript.

Includes:

- Modern JavaScript
- Material UI
- ESLint Flat Config

---

# 📁 Generated Project Structure

```text
my-app/
├── src/
│   ├── app/
│   ├── components/
│   ├── theme/
│   └── ...
├── eslint.config.mjs
├── next.config.js
├── package.json
└── README.md
```

The generated structure is intentionally simple, scalable, and easy to maintain.

---

# 📚 What's Included?

Every generated project comes preconfigured with:

| Feature                      | Description                       |
| ---------------------------- | --------------------------------- |
| Next.js App Router           | Latest routing architecture       |
| Material UI                  | Ready-to-use MUI setup            |
| Theme Provider               | Already configured                |
| Emotion                      | Integrated automatically          |
| ESLint Flat Config           | Modern linting configuration      |
| eslint-plugin-perfectionist  | Organized imports & sorting       |
| eslint-plugin-unused-imports | Cleaner codebase                  |
| Production Structure         | Organized folders for scalability |

Development artifacts like `.next`, `node_modules`, and build caches are excluded from generated projects.

---

# 🖥 CLI Reference

| Command                      | Description                  |
| ---------------------------- | ---------------------------- |
| `npx create-next-mui`        | Interactive project creation |
| `npx create-next-mui my-app` | Create a new project         |
| `npm init next-mui`          | Alternative project creation |
| `--yes`                      | Skip prompts                 |
| `-y`                         | Short form of `--yes`        |
| `add zustand`                | Install Zustand plugin       |
| `add react-query`            | Install React Query plugin   |

---

# 🛣 Roadmap

Current progress.

- ✅ JavaScript template
- ✅ TypeScript template
- ✅ Zustand plugin
- ✅ React Query plugin

Planned improvements.

- ⏳ Redux Toolkit plugin
- ⏳ Authentication plugins
- ⏳ Testing plugins
- ⏳ More official plugins
- ⏳ Additional starter templates

---

# 🤝 Contributing

Contributions are always welcome.

Whether you'd like to:

- Report bugs
- Suggest new features
- Improve documentation
- Submit pull requests

Feel free to open an issue or create a PR.

Every contribution helps make **create-next-mui** better.

---

# 📖 Learn More

Read the development journey and release articles.

- 🚀 [Introducing create-next-mui v0.1.0](https://dev.to/thatonevikash/stop-manual-boilerplate-scaffolding-nextjs-with-mui-1l60)

- 🤩 [create-next-mui v0.2.0 — Plugin Support](https://dev.to/thatonevikash/create-next-mui-v020-is-here-now-with-plugin-support-4l70)

---

# ⭐ Support the Project

If **create-next-mui** helps you build projects faster, consider supporting it.

- ⭐ Star the repository
- 🐞 Report issues
- 💡 Suggest new ideas
- 🤝 Contribute to the project
- ❤️ Share it with other developers

Your support helps the project grow.

---

# 📄 License

This project is licensed under the **MIT License**.
