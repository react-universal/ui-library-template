# @reactuniversal/library-template

A template for creating universal (web, ios, android, desktop) React Native libraries using Storybook, Lerna, React Native Web, and Typescript.

### Independently Versioned Packages

Each package is independently versioned and avaialble using Lerna.


### Public Storybooks with Github Pages

Each library can publish it's storybook docs using the commands

```
npm run build-storybook
npm run run deploy-docs
```

This will bundle the storybook web project, create a separate branch `gh`, push the bundle to that branch, and make it available on github pages at a url like this:

```
https://react-universal.github.io/[package]
```

## Structure

__storybook__

Folder contains configuration for React Native storybook and storybook in general.

__.storybook__

Folder contains configuration for React Web storybook

__packages__

Folder contains all of the individual package folders (Button, Utils, etc.

__packages/[Component]__

Each seperated package has it's own `package.json`, `lib` folder, and `__tests__`.

__packages/[Component]/lib__

Lib folder for each package contains the src files for that package as well as the `.stories.` files.

__packages/[Component]/__tests__

The `__tests__` folder contains the component tests.

## Commands

__npm run android__

Runs storybook on Android

__npm run ios__

Runs storybook on iOS

__npm run web__

Runs storybook on the web, also opens a tab one `localhost:9000`.

__npm run build-storybook__

Builds the storybook web project into a bundle in the `public` folder.

__npm run deploy-docs__

Deploys the contents of the public folder, which should be the storybook web project.

__npm run see-npm-package__

This command shows the exact files that will be published if you run the command `npm publish`. Useful for double checking if you are including something you do not want to include. If something does need to be added, you can ignore it in the `.npmignore` file.

__npm run test__

Runs Jest tests

__npm run lint__

Runs eslint

