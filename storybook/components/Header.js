import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
  };

  render() {
    const {title, subtitle} = this.props;
    return (
      <View style={styles.container}>
        <Text styles={styles.header}>{title}</Text>
        {subtitle ? (
          <Text type={1} style={[styles.subtitle]}>
            {subtitle}
          </Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
  },
  header: {
    fontSize: 24,
  },
  subtitle: {
    marginTop: 40,
  },
});
