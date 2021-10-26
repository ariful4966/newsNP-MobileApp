//import liraries
import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

// create a component
const Screen = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    backgroundColor: '#f7f3f3',
    flex: 1,
  },
});

//make this component available to the app
export default Screen;
