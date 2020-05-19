import React from 'react';
import {View} from 'react-native';

import Example from './Example';

import {storiesOf} from '../../../storybook/helpers/storiesOf';

storiesOf('Components | Component', module)
  .addParameters({jest: ['Example']})
  .add('Example', () => (
    <View>
      <Example text={'This is an example Component'} />
    </View>
  ));
