# Tooling and Linting Notes

Most projects can rely on the default setup, but if you need to tune linting or build tooling, start here.

## ESLint with TypeScript

Enable type-aware linting by pointing ESLint at the project tsconfig files:

```js
// eslint.config.js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

Swap the base config to one of the type-aware presets:

```js
// Recommended type-aware presets
tseslint.configs.recommendedTypeChecked;
tseslint.configs.strictTypeChecked;
```

Optionally layer in stylistic rules:

```js
...tseslint.configs.stylisticTypeChecked
```

## React Plugin Extras

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: { react },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

## Vite Notes

The project uses the standard `vite.config.ts`. If you add new entry points or need to change the build output, follow the official Vite docs: <https://vitejs.dev/config/>.

Need more? Talk to the tech lead before introducing major tooling changes.
