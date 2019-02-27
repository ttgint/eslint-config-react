# ttgint/eslint-config-react

![npm](https://img.shields.io/npm/v/@ttgint/eslint-config.svg) [![Build Status](https://travis-ci.org/ttgint/eslint-config-react.svg?branch=master)](https://travis-ci.org/ttgint/eslint-config-react) [![Greenkeeper badge](https://badges.greenkeeper.io/ttgint/eslint-config-react.svg)](https://greenkeeper.io/)

ESLint config for React projects generated with `create-react-app`

## Installation

`npm i eslint prettier @ttgint/eslint-config-react --save-dev`

## Setup

Add the config to either the `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@ttgint/eslint-config-react"
  }
}
```

or to the `.eslintrc`

```json
{
  "extends": "@ttgint/eslint-config-react"
}
```

## Acknowledgments

- Based on [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- Based on [eslint-config-create-react-app](https://www.npmjs.com/package/eslint-config-react-app)
- See this great [article](https://medium.com/@natterstefan/how-to-create-your-own-shared-eslint-prettier-and-stylelint-configuration-3930dd764de3)
