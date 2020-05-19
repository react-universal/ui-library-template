import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import {storiesOf} from '../helpers/storiesOf';

storiesOf('Docs | Start Here', module).add('Get Started', () => (
  <View style={styles.container}>
    <Text style={styles.title}>React Universal</Text>
    <Text style={styles.subtitle}>UI that scales</Text>
    <View style={styles.row}>
      <Button title={'Docs'} onPress={() => {}} />
      <Button title={'Github'} onPress={() => {}} />
    </View>
  </View>
));

const styles = StyleSheet.create({
  container: {
    marginTop: 40,

    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
  },
});
