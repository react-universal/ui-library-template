# @reactuniversal/ui-library-template

A template for creating universal (web, ios, android, desktop) React Native libraries using Storybook, Lerna, React Native Web, and Typescript.

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

![](https://img.shields.io/github/lerna-json/v/react-universal/ui-library-template) ![](https://img.shields.io/github/v/release/react-universal/ui-library-template) ![](https://img.shields.io/npm/v/react-universal/ui-template-library) ![](https://img.shields.io/travis/react-universal/ui-library-template) ![](https://img.shields.io/github/license/react-universal/ui-library-template) ![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg) [![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://react-universal.github.io/ui-library-template/)

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
