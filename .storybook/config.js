import {configure, addDecorator} from '@storybook/react';

import {withTests} from '@storybook/addon-jest';
import {addParameters} from '@storybook/react';
import results from '../.jest-test-results.json';

addParameters({
  viewport: {},
});
addDecorator(
  withTests({
    results,
    filesExt: '.test.tsx',
  }),
);

const req = require.context('../packages', true, /\.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
