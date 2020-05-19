# @reactuniversal/ui-library-template

A template for creating universal (web, ios, android, desktop) React Native libraries using Storybook, Lerna, React Native Web, and Typescript.

## Tech

| Tech                | Used for                                                    | Learn more                                                                        |
| ------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------- |
| React               | UI library for building the components                      | [Docs](https://reactjs.org/)                                                      |
| React Native        | Components and tools for rendering React on iOS and Android | [Docs](https://reactnative.dev/)                                                  |
| React Native Web    | Render React native components on the web                   | [Github](https://github.com/necolas/react-native-web)                             |
| Lerna               | Allows Monorepo for independently versioned components      | [Github](https://lerna.js.org/)                                                   |
| Typescript          | Typechecking for Javascript                                 | [Docs](https://www.typescriptlang.org/)                                           |
| Eslint              | Linter                                                      | [Docs](https://eslint.org/)                                                       |
| Jest                | Test framework                                              | [Docs](https://jestjs.io/en/)                                                     |
| React Test Renderer | Renders React components to pure js objects                 | [Docs](https://reactjs.org/docs/test-renderer.html)                               |
| Storybook           | Component Development Environment and documentation         | [Docs](https://storybook.js.org/)                                                 |
| Jest Addon          | Displays Jest test results for each component in Storybook  | [Github](https://github.com/storybookjs/storybook/tree/master/addons/jest)        |
| Viewport Addon      | Displays components in different device sizes               | [Github](https://github.com/storybookjs/storybook/tree/master/addons/viewport)    |
| Storysource Addon   | Displays the code for the component story                   | [Github](https://github.com/storybookjs/storybook/tree/master/addons/storysource) |
| a11y Addon          | Displays accessbility tests for each component              | [Github](https://github.com/storybookjs/storybook/tree/master/addons/a11y)        |
| gh-pages            | Tool for easily publishing to Github Pages                  | [Githb](https://github.com/tschaub/gh-pages)                                      |

### Independently Versioned Packages

Each package is independently versioned and avaialble using Lerna.

### Public Storybooks with Github Pages

Each library can publish its storybook docs using the following command:

```
npm run run deploy-docs
```

This will bundle the storybook web project, create a separate branch `gh`, push the bundle to that branch, and make it available on github pages at a url like this:

```
https://react-universal.github.io/[package]
```

For example, the template ui library storybook is published here: https://react-universal.github.io/ui-library-template/

### Badges

Sample badges to use:

![](https://img.shields.io/github/lerna-json/v/react-universal/ui-library-template) ![](https://img.shields.io/github/v/release/react-universal/ui-library-template) ![](https://img.shields.io/npm/v/react-universal/ui-template-library) ![](https://img.shields.io/travis/react-universal/ui-library-template) ![](https://img.shields.io/github/license/react-universal/ui-library-template) ![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg) [![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://react-universal.github.io/ui-library-template/) ![](https://img.shields.io/badge/platforms-ios%20%7C%20android%20%7C%20web%20%7C%20macos%20%7C%20windows%20%7C%20electron-blue)

### Stroybook style helper components

By default storybook adds the components directly in the top left without any styles. However, usually it looks better (though not always) to add some more spacing and title. Two helper components are provided for this: `Container` and `Header`.

The second problem with default storybook styling is that the storybook environment (where the components actually are) is not wrapped in a `ScrollView`, the `Container` component therefore, also wraps the environment and allows you to scroll down on iOS and Android if your components grow larger than the screen.

## Structure

**storybook**

Folder contains configuration for React Native storybook and storybook in general.

**.storybook**

Folder contains configuration for React Web storybook

**packages**

Folder contains all of the individual package folders (Button, Utils, etc.

**packages/[Component]**

Each seperated package has it's own `package.json`, `lib` folder, and `__tests__`.

**packages/[Component]/lib**

Lib folder for each package contains the src files for that package as well as the `.stories.` files.

**packages/[Component]/**tests\_\_

The `__tests__` folder contains the component tests.

## Commands

`npm run android`

Runs storybook on Android

`npm run ios`

Runs storybook on iOS

`npm run web`

Runs storybook on the web, also opens a tab one `localhost:9000`.

`npm run build-storybook`

Builds the storybook web project into a bundle in the `public` folder.

`npm run deploy-docs`

Deploys the contents of the public folder, which should be the storybook web project.

``npm run see-npm-package`

This command shows the exact files that will be published if you run the command `npm publish`. Useful for double checking if you are including something you do not want to include. If something does need to be added, you can ignore it in the `.npmignore` file.

`npm run test`

Runs Jest tests

`npm run lint`

Runs eslint
