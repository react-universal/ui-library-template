# @reactuniversal/ui-library-template

A template for developing universal (web, ios, android, desktop) React Native UI components.


* Develop cross-platform components for iOS, Android, Web, Windows, Macos, and Electron with React Native
* Cross-platform storybook environment with useful addons
* Publish storybook environment to Github pages with a single command
* Publish and version each component independently using a single command with Lerna
* Typescript Support
* Accessibility checks with ay11 addon
* Unit testing with Jest and React test renderer

## Get Started

1. Click "Use this Template" and create a new repo
2. Run `npm i` to install the dependencies
3. Start the storybook web environment: `npm run web`
4. Start a native storybook environment: `npm run ios` or `npm run android`
5. Start creating components

Optional

6. Update fields in Package.json to match your project (name, author, version, etc)
7. Update `storybook/stories/Home.stories.tsx` text to match the name of your project
8. Update Readme for your project 



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

## Docs

### Developing components

Each component should have it's own folder under the `packages` folder, with it's own `package.json`. This allows you to publish and make available each component seperately. Though you can structure the packages and components however you want, but you'll  need to update the `lerna` configuration depending on your structure.

An example component is provided in `packages/example`. The storybook config looks for stories that have this extension: `.stories.tsx`. The tests look for stories with `.test.tsx` extension. Where you put these files doesn't really matter, but I find putting them right next to the component makes it easier.

```
// packages/example/lib

Example.stories.tsx
Example.test.tsx
Example.tsx
```

When I want to create a new component I usually use the `lerna create <name>` commmand, but this is not necessary, you can just create a new folder, `package.json`, and the required component files.

### Independently Versioned Packages

The config for lerna is found in the `lerna.json` file at the project root. Currently, `version` is set to `independent`, which means that each package/component you add will be versioned independently of each other. If you want all packages to share the same version then change `version` to the semantic version you want, for example, `version: 1.1.3`. Check out the Lerna [documentation](https://github.com/lerna/lerna#readme) to learn more about configuring Lerna.

### Publishing Your Components

Lerna makes this incredibly easy, just run `lerna publish` and all packages with updates will be published. Lerna provides a lot of options here however, checkout the [docs on publishing](https://github.com/lerna/lerna/tree/master/commands/publish#readme) to learn more.

### Publishing Your Storybook with Github Pages

You can publish the storybook web environment using the following command:

```
npm run run deploy-docs
```

This will bundle the storybook web project, create a separate branch `gh`, push the bundle to that branch, and make it available on github pages at a url like this:

```
https://react-universal.github.io/[package]
```

For example, the template ui library storybook is published here: https://react-universal.github.io/ui-library-template/


### Stroybook style helper components

By default storybook adds the components directly in the top left without any styles. However, usually it looks better (though not always) to add some more spacing and title. Two helper components are provided for this: `Container` and `Header`.

Another problem with default storybook styling is that the storybook environment (where the components actually are) is not wrapped in a `ScrollView`, which in React Native means the screen will not scroll if the content extends past the bottom. The `Container` component, therefore, also wraps the environment and allows you to scroll down on iOS and Android if your components grow larger than the screen.

### Badges

Some badges that might be useful to disply in the library's Readme.

![](https://img.shields.io/github/lerna-json/v/react-universal/ui-library-template) ![](https://img.shields.io/github/v/release/react-universal/ui-library-template) ![](https://img.shields.io/npm/v/react-universal/ui-template-library) ![](https://img.shields.io/travis/react-universal/ui-library-template) ![](https://img.shields.io/github/license/react-universal/ui-library-template) ![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg) [![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://react-universal.github.io/ui-library-template/) ![](https://img.shields.io/badge/platforms-ios%20%7C%20android%20%7C%20web%20%7C%20macos%20%7C%20windows%20%7C%20electron-blue)

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

`npm run see-npm-package`

This command shows the exact files that will be published if you run the command `npm publish`. Useful for double checking if you are including something you do not want to include. If something does need to be ignored, you can ignore it in the `.npmignore` file.

`npm run test`

Runs Jest tests

`npm run lint`

Runs eslint

## React Universal

All React Universal UI components use this template. For example:

* [Button](https://github.com/react-universal/Button)


