import React from 'react';
import Example from './Example';

import renderer from 'react-test-renderer';

test('Example Renders', () => {
  const example = <Example text="test" />;
  const tree = renderer.create(example).toJSON();
  expect(tree).toMatchSnapshot();
});
