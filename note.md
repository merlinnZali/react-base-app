---------------------------------------------------

ESLINT:
1-
- npm install -g eslint
- install esint plugin on vscode (add config to settings)
- add .eslintrc.json||js => 
  ou  ajoute ceci directement dans le package.json
  "eslintConfig": {
    "extends": "react-app"
  } 


2-
SEE THIS https://www.npmjs.com/package/eslint-config-airbnb-typescript
OR https://www.npmjs.com/package/@typescript-eslint/eslint-plugin

--

stylledComponent
Bootstrap
Jest + Enzyme

----------------------------------------
The style will be load only when the component it's up

Sass Syntax Out-Of-The-Box
Dynamic Styling
Theming ( Compatible with MaterialUI-android Theming)

---

## https://styled-components.com/ecosystem

create react-app my-app --template typescript
npm add -D @typescript-eslint/scope-manager
scss => npm add node-sass
scss + module => npm add scss-loader typings-for-scss-modules-loader
yarn for internal call: npm install yarn

ESLINT & Prettier:
npm add -D eslint
npx eslint --init
[
configuration:
How would you like to use ESLint?
Select: To check syntax, find problems, and enforce code style
What type of modules does your project use?
Select: JavaScript modules (import/export)
Which framework does your project use?
Select: React
Does your project use TypeScript?
Select: Yes
Where does your code run?
Select: Browser
How would you like to define a style for your project?
Select: Use a popular style guide
Which style guide do you want to follow?
Select: Airbnb: https://github.com/airbnb/javascript
What format do you want your config file to be in?
Select: JSON
]

Airbnb style guide: [

- eslint-config-airbnb
- eslint-config-airbnb-typescript
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-react
- eslint-plugin-react-hooks
  ]
  CRA style guide: [
- eslint-config-react-app
  ]
  Load: [
- eslint-import-resolver-typescript — This plugin adds TypeScript support to eslint-plugin-import.
- eslint-webpack-plugin — A ESlint loader for webpack. (Note:eslint-loader was deprecated)
  ]
  Babel: [
  babel-eslint — lint ALL valid Babel code with ESLint.
  ]
  jest and other: [
- eslint-plugin-jest — ESLint plugin for Jest
- eslint-plugin-flowtype — This plugin exports a recommended configuration that enforces Flow type good practices.
  ]

Prettier:[

- prettier
- prettier-eslint — Formats your JavaScript using prettier followed by eslint --fix
- prettier-eslint-cli — solve the issue of a bunch of files that you want to format using prettier-eslint. But prettier-eslint can only operate on strings.
- eslint-plugin-prettier
  ]
  npm add -D eslint-import-resolver-typescript +
  npm add -D prettier prettier-eslint
  (prettier-eslint-cli eslint-plugin-prettier [may be not needed]) eslint-config-prettier +
  npm add -D babel-eslint +
  npm add -D eslint-webpack-plugin + => instead of eslint-loader

npm add -D eslint-plugin-flowtype => deja dans le module npm
npm add -D eslint-plugin-jest => deja dans le module npm

npm add -D eslint-config-airbnb-typescript
npm add -D eslint-config-react-app => deja dans le module npm

-

"extends": [
"plugin:react/recommended",
"plugin:@typescript-eslint/recommended", //added
"airbnb", //airbnb better than typescript-eslint and more start compare to airbnb-typescript
"plugin:prettier/recommended"// Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
],
||
"extends": [
"airbnb-typescript", //airbnb-typescript better than typescript-eslint and less start compare to airbnb
"react-app", // ou plugin:react/recommended
"prettier"// Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
],
mixed by me:
"extends": [
"airbnb-typescript",
"plugin:react/recommended",
"prettier/@typescript-eslint", // peut etre pas besoin
"prettier"// Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
],

---

"rules": {
"arrow-body-style": "warn",
"react-native/no-unused-styles": 2,
"react-native/split-platform-components": 0,
"react-native/no-inline-styles": 0,
"react-native/no-color-literals": 0,
"semi": [2, "never"],
"class-methods-use-this": 0,
"react/jsx-filename-extension": [
1,
{
"extensions": [".js", ".jsx"]
}
],
"react/prefer-stateless-function": [
0,
{
"ignorePureComponents": 1
}
],
"react/forbid-prop-types": 0,
"no-underscore-dangle": 0,
"no-restricted-properties": 0,
"no-plusplus": 0,
"no-alert": 0,
"max-len": 0,
"global-require": 0,
"react/jsx-no-bind": 0,
"react/prefer-es6-class": 0,
"react/react-in-jsx-scope": 0,
"space-before-function-paren": 0,
"linebreak-style": 0,
"react/jsx-quotes": 0,
"react/no-array-index-key": 0,
"react/jsx-boolean-value": 0,
"no-nested-ternary": 0,
"func-names": 0,
"no-bitwise": 0,
"no-await-in-loop": 0,
"jsx-quotes": [2, "prefer-double"],
"eqeqeq": 0,
"no-return-await": 0,
"camelcase": 0
}

---

## npm i -D husky lint-staged pretty-quick

MATERIAL STYLE-COMPONENT BOOTSTRAP:
npm add -D @material-ui/core @material-ui/icons @material-ui/styles
npm add -D styled-components @types/styled-components
npm install react-bootstrap@next bootstrap@5.1.1 bootstrap-icons

Bootstrap config[
import Button from 'react-bootstrap/Button';

// or less ideally
import { Button } from 'react-bootstrap';

---

{/_ The following line can be included in your src/index.js or App.js file_/}

## import 'bootstrap/dist/css/bootstrap.min.css';

SASS:
/_ The following line can be included in a src/App.scss _/

@import "~bootstrap/scss/bootstrap";

/_ The following line can be included in your src/index.js or App.js file _/

## import './App.scss';

Custom:
/_ The following block can be included in a custom.scss _/

/_ make the customizations _/
$theme-colors: (
"info": tomato,
"danger": teal
);

/_ import bootstrap to set changes _/
@import "~bootstrap/scss/bootstrap";
...
/_ The following line can be included in a src/App.scss _/

## @import "custom";

-----------routing-----------------
npm install react-router-dom

---------- add toolkit-------------

npm install @types/react-redux @reduxjs/toolkit react-redux
You may need to run npm install
one more time for CRA to pick up other @types declarations in your package.json

- We’ll be using Webpack hot module replacement so that we can update our code without requiring a full refresh, preserving state in the process, so in order to avoid Typescript errors, we’ll need to install some Webpack type definitions:

- rtk history hotReload
  npm install --save connected-react-router history
  history: 4.10.1
  hot reload history: npm install @types/webpack-env react-hot-loader @hot-loader/react-dom
  react-hot-loader : 3.1.1 ok
  react-hot-loader : >=4 4.13.0 error => AppContainer should be patched
  @hot-loader/react-dom: use for hot reloaded hooks
  Just to add to the accepted answer: After installing @types/webpack-env you might have to add "types": ["webpack-env"] to your tsconfig.json in compilerOptions.

---

Test et bootstrap
