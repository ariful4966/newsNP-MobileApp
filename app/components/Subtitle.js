//import liraries
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// create a component
const Subtitle = ({children, numberOfLines = 2, size = 15}) => {
  return (
    <View style={styles.container}>
      <Text
        numberOfLines={numberOfLines}
        style={[styles.subTitle, {fontSize: size}]}>
        {children}
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  subTitle: {
    // fontWeight: 'bold',
  },
});

//make this component available to the app
export default Subtitle;
