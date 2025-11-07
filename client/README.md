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

- handle place of add customer button margin top
- add delete all customers button in home page
- handle h1 name
- add pagination
- add project name
- enhance search logic
- enhance front structure and separate the logic into different files
- add auth
- deploy

# why i install react query or tanstack query

- i use it because it's the best library with backend endpoints https://tanstack.com/query/latest/docs/framework/react/installation

# how to make quires appear in devtools

- by installing react query devtools https://tanstack.com/query/v5/docs/framework/react/devtools

# import variables from .env in react vite

- i forget how to do it and import it using "process.env.VARIABLE*NAME" and give me error
  so i searched and found that we have to add prefix "VITE*" to the variable name and import it using "import.meta.env.VITE_VARIABLE_NAME"

# how to get customers using react query

- useQuery to get customers

# how to add customer using react query

- useMutation to add customer

# how to delete customer using react query

- useMutation to delete customer
- invalidateQueries to get the data after deleting the customer

# handle isPending and error in customers.tsx

# how to convert mongo timestamp to last update such as "a few seconds ago"

# how to add search functionality in customers page

- i use react context to share the searchBar state to display the result of search in component list which in outlet

# why i use react context

- because searchBar component which contain form and input its' separate component
  - MainlLayout contain header
    - Header - SearchBar
      so i use react context to share the searchBar state to display the result of search in component list which in outlet
      so i use context to save the search term and write also search function inside context to use it in other component to get the customers which match the search term

# how i integrate with submit form in search bar and fetch data in useSearchQuery

- by using should Search which we will make it true when the user submit the form
- then we will use useSearchQuery to fetch the data
- after fetch data we wil set the searchTerm to empty string and set the shouldSearch to false to stop search
- then we have filtered customers then display them in Customer List using useSearchQuery

# error when using onSuccess function in useSearchQuery

- i found that in v5 they removed the onSuccess function from useQuery so i need to use meta to handle the success
- all what you need to use meta:{onSuccess:()=>{}} instead of onSuccess:()=>{} directly

# how to handle search when the user enter nay char the function works

- useDebounce function to debounce the search function
- we will wait about 500 ms to search
- i use https://usehooks.com/usedebounce library to handle the debounce

# when you should use debounce

- when you make search dynamic or auto when the user enter the search term
- when you make search dynamic and you need to wait for the user to stop typing
- but i remove useDebounce function because i make only the results appear when the user click on submit or search button

# What i used for the first time

- react-query = tanstack
- react-toastify
-

# What i learned

- how to use react query
- how to use react toastify
- how to integrate react with nodejs and express
-

# Flow

## Search

1. User enters search term
2. User clicks search button
3. Search function is called
4. Search function is debounced
5. Search function is called
6. the search include [firstName, lastName, email, country]
7. display customers which match the search term

## Customers List

### View Customer

1. Customers List component is rendered
2. Click on view button
3. redirect to customer details page which contain customer details [email, full name, country, age, gender, joined date]
4. the page contain edit button
5. click on edit button will redirect to edit this customer page
6. not all fields are editable
7. the not editable fields are [email, gender] and contain disabled cursor
8. change the value of the not editable fields
9. click on update customer button will not update the database
10. display toast message if the update customer is success
11. then after few seconds the page will redirect to customer details page
12. you will found that values changed successfully

### Delete Customer

1. click on delete button will deleted the selected customer

### Edit Customer

1. click on edit button will redirect to edit this customer page
2. change the value of the not editable fields
3. click on update customer button will update the database
4. display toast message if the update customer is success
5. then after few seconds the page will redirect to customer details page

## Add Customer

1. click on add customer page in the sidebar
   2.fill the form
2. click on add customer button will add the customer to the database
3. display toast message if the add customer is success
4. then reset the form
