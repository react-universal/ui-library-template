import React from 'react';
import {View} from 'react-native';

import Example from './example';

import {storiesOf} from '../../../storybook/helpers/storiesOf';

storiesOf('Example', module)
  .addParameters({jest: ['Button']})
  .add('Component', () => (
    <View>
      <Example />
    </View>
  ));
