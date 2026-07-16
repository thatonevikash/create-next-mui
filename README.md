[<img width="1420" alt="CREATE-NEXT-MUI-BANNER" src="https://github.com/user-attachments/assets/11e72fc8-6b6d-40c4-97a1-c05f7b943e02" />](https://create-next-mui.vercel.app/)

# [create-next-mui](https://create-next-mui.vercel.app/)

[![npm version](https://img.shields.io/npm/v/create-next-mui?style=flat&logo=npm&color=CB3837)](https://www.npmjs.com/package/create-next-mui)
[![Next.js](https://img.shields.io/badge/Next.js-v16-000000?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![MUI](https://img.shields.io/badge/MUI-v9-007FFF?style=flat&logo=mui&logoColor=white)](https://mui.com/)

Scaffold a production-ready **Next.js + Material UI** application in seconds.

The generated project comes preconfigured with:

- ⚡ Next.js App Router
- 🎨 Material UI
- 📦 TypeScript or JavaScript templates
- 🧹 ESLint Flat Config
- 📁 Scalable project structure

No global installation required.

---

## Quick Start

Create a new project:

```bash
npx create-next-mui my-app
```

or

```bash
npm init next-mui
```

If no project name is provided, the CLI will guide you through the setup interactively.

```bash
npx create-next-mui
```

---

## Non-interactive Mode

Use the `--yes` (or `-y`) flag to skip prompts and accept the default configuration.

```bash
npx create-next-mui my-app --yes
```

This will automatically:

- use the provided project name
- select the **TypeScript** template
- generate the project without prompting

This is especially useful for:

- CI/CD pipelines
- automation scripts
- testing
- quick project generation

---

## Interactive Setup

Without `--yes`, the CLI walks you through the available options.

Current prompts include:

- Project name
- Language selection
  - TypeScript (recommended)
  - JavaScript
- Features
  - Zustand
  - React Query ( TanStack Query )

---

# Available Templates

### TypeScript

Recommended for most projects.

Includes:

- TypeScript
- strict type checking
- MUI theme typings
- ESLint Flat Config

### JavaScript

For developers who prefer JavaScript.

Includes:

- modern JavaScript
- Material UI
- ESLint Flat Config

### Features

- Zustand
- React Query ( TanStack Query )

---

## Generated Project Structure

```text
my-app/
├── src/
│   ├── app/
│   ├── components/
│   └── theme/
├── eslint.config.mjs
├── next.config.js
├── package.json
└── README.md
```

---

## What's Included

Every generated project comes configured with:

- Next.js App Router
- Material UI
- Theme Provider
- Emotion integration
- ESLint v9 Flat Config
- eslint-plugin-perfectionist
- eslint-plugin-unused-imports
- organized project structure

Development artifacts such as `node_modules`, `.next`, and build caches are excluded from generated projects.

---

## Getting Started

After scaffolding:

```bash
cd my-app
npm install
npm run dev
```

Useful scripts:

```bash
npm run dev
```

Start the development server.

```bash
npm run lint
```

Run ESLint.

```bash
npm run build
```

Create a production build.

---

## CLI Reference

### Create a project

```bash
npx create-next-mui my-app
```

### Interactive mode

```bash
npx create-next-mui
```

### Accept defaults

```bash
npx create-next-mui my-app --yes
```

or

```bash
npx create-next-mui my-app -y
```

---

## Blogs

- [Launched v0.2.0 with plugins](https://dev.to/thatonevikash/create-next-mui-v020-is-here-now-with-plugin-support-4l70) 🤩
- [Launched v0.1.0](https://dev.to/thatonevikash/stop-manual-boilerplate-scaffolding-nextjs-with-mui-1l60) 🚀

---

## Contributing

Issues and pull requests are welcome.

If you'd like to improve the templates or add new features, feel free to open an issue or submit a PR.

---

## License

MIT
