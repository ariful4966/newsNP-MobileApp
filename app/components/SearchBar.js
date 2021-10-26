//import liraries
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

// create a component
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search here.." />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
  },
  searchInput: {
    width: '100%',
    height: '100%',
    paddingLeft: 8,
    fontSize: 16,
  },
});

//make this component available to the app
export default SearchBar;
