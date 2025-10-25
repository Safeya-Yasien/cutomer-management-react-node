# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

# Next Steps

- build main layout with tailwind ✅
  - add sidebar ✅
    - handle active link ✅
    - handle h1 name
    - enhance sidebar
    -
  - add search bar ✅
    - add search functions
- home page
  - add customers table ✅
    - add pagination
    - display real data
    - add actions functions
- build add customers form ✅

  - add form ✅
  - add validation
  - add submit function

- install nodejs, express, mongodb, mongoose, dotenv,
-

# why i install react query or tanstack query

- i use it because it's the best library with backend endpoints

# import variables from .env in react vite

- i forget how to do it and import it using "process.env.VARIABLE*NAME" and give me error
  so i searched and found that we have to add prefix "VITE*" to the variable name and import it using "import.meta.env.VITE_VARIABLE_NAME"

# how to get customers using react query

- useQuery to get customers

# how to add customer using react query

# how to delete customer using react query

- useMutation to delete customer
- invalidateQueries to get the data after deleting the customer

# handle isPending and error in customers.tsx

# how to convert mongo timestamp to last update such as "a few seconds ago"

# add logic to actions

- add view action ✔️
- add delete action ✔️
- add edit action
- add edit action in customer details page
- add customer page logic
- add delete all customers button in home page
- add search logic
