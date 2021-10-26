//import liraries
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// create a component
const Title = ({children, numberOfLines = 2, size = 18}) => {
  return (
    <View style={styles.container}>
      <Text
        numberOfLines={numberOfLines}
        style={[styles.title, {fontSize: size}]}>
        {children}
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  title: {
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default Title;
