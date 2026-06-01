# create-next-mui 🚀

[![npm version](https://img.shields.io/npm/v/create-next-mui?style=flat&logo=npm&color=CB3837)](https://www.npmjs.com/package/create-next-mui)
[![Next.js v19](https://img.shields.io/badge/Next.js-v19-000000?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![MUI v9](https://img.shields.io/badge/MUI-v9-007FFF?style=flat&logo=mui&logoColor=white)](https://mui.com/)

A blazing-fast, interactive CLI tool to instantly scaffold production-ready **Next.js** applications pre-configured with **Material UI (MUI)**, robust theme providers, and an elite architectural linting layout.

Stop wasting time wiring up Emotion caches, Next.js App Router layout configs, or sorting your imports manually. Launch your next project perfectly in under 10 seconds.

---

## 🚀 Quick Start

You don't need to install anything globally. Just run the following command in your terminal:

```bash
npx create-next-mui

# or 

npm init next-mui
```

The interactive prompt engine (powered by `@clack/prompts`) will guide you through naming your project and selecting your preferred flavor.

---

## ✨ Key Features

- **⚡ Modern Architecture:** Built natively on top of the Next.js App Router structure.
- **🎨 Material UI Ready:** Seamless compilation of MUI components inside Server and Client Components with pre-configured UI themes.
- **🧩 Dual-Template Architecture:** Full support for both **TypeScript** and **JavaScript** boilerplates.
- **🧼 Perfectionist Linting Config:** Pre-packaged with **ESLint v9 Flat Config** (`eslint.config.mjs`) utilizing `eslint-plugin-perfectionist` and `eslint-plugin-unused-imports`.
- **📦 Pure & Lightweight:** Zero bloat. Template files are automatically stripped of development artifacts (`node_modules`, caches) before build deployment.

---

## 📦 Choice of Flavors

During the prompt sequence, you can choose between two completely separate architectures, both fine-tuned for high-performance builds:

1. **TypeScript Template (`next-mui-template-ts`)** – Out-of-the-box strong typing, custom theme module augmentations, and strict `@typescript-eslint` checking.
2. **JavaScript Template (`next-mui-template-js`)** – Lightweight, clean vanilla ES modern syntax with optimized configuration overhead.

---

## 📐 Generated Project Structure

No matter which path you choose, `create-next-mui` prints out an organized, production-grade layout optimized for scalability:

```text
my-awesome-app/
├── src/
│   ├── app/
│   │   ├── layout.js/ts      # Handles App Router initialization & MUI Cache Provider
│   │   └── page.js/ts        # Pre-built home view utilizing responsive MUI layouts
│   ├── components/           # Reusable global presentation components
│   └── theme/
│       ├── index.js/ts       # Deep theme customization (palette, typography, overrides)
│       └── theme-provider.js # Keeps layout tree hydrations isolated and performant
├── eslint.config.mjs         # Elite natural line-length linting layout
├── next.config.js            # Configured optimization vectors
├── package.json
└── README.md

```

---

## 🎨 Elite Linting Layout (Perfectionist Grouping)

Both boilerplate environments contain a fine-tuned, strict importing arrangement rule framework using `line-length` natural alpha sorting. Your files are automatically linted and organized cleanly on save down this architectural chain:

1. **React Core APIs** (`react`)
2. **Next.js Framework Hooks & Context** (`next/*`)
3. **Material UI Design Tokens & Engine** (`@mui/*`, `@emotion/*`)
4. **External Third-Party Libraries**
5. **Internal Layer Architectures** (`@/types`, `@/lib`, `@/components`, `@/theme`)

Say goodbye to disorganized, messy blocks of import statements!

---

## ⚙️ Development Scripts

Once your scaffolding finishes generating, step inside your directory and run the standard lifecycle workflows:

```bash
# Install dependencies
npm install

# Boot up local development server
npm run dev

# Run ESLint validation checks with automated file ordering adjustment
npm run lint

# Compile production-ready code bundles
npm run build

```

---

## 🤝 Contributing & Feedback

Issues and pull requests are highly welcome! If you want to expand the templates or suggest additional components, feel free to open an issue or submit a pull request on the official repository.

Maintained with 💻 by [thatonevikash](https://github.com/thatonevikash).

---

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.
