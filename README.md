# Southeast Asian Student Coalition (SASC) Website

Welcome to the SASC website repository! This project is built using React, TypeScript, and Vite, providing a modern and efficient development environment. Our goal is to create a dynamic and engaging platform for the Southeast Asian Student Coalition at UC Berkeley.

## Features

- **Home Page**: Overview of the community.
- **About Page**: History and mission of SASC.
- **Contact Page**: Connect with us.
- **Events Page**: Information on events and activities.

## Technical Overview

This project utilizes:

- **React** for building user interfaces
- **TypeScript** for type safety and better developer experience
- **Vite** for fast and optimized builds
- **Material-UI** for UI components

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd sasc-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To start the development server, run:

```bash
npm run dev
```

## Development Guidelines

- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for coding standards.
- Use feature branches for new features and bug fixes.
- Write clear and concise commit messages.

## Contribution Process

1. Fork the repository and create your branch from `main`.
2. Ensure your code follows the coding standards and passes all tests.
3. Submit a pull request for review.

## License

This project is licensed under the MIT License.

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
