import React from 'react';
import {Text, View} from 'react-native';

export interface Props {
  text: string;
}

const Example = ({text}: Props) => (
  <View>
    <Text>{text}</Text>
  </View>
);

export default Example;
