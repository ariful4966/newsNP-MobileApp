//import liraries
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import BlockCard from './BlockCard';

const {width} = Dimensions.get('window');

// create a component
const SmallCard = ({item}) => {
  return (
    <BlockCard item={item} style={styles.container} imageStyle={styles.image} />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: width / 2,
    marginRight: 15,
    height: 200,
  },
  image: {
    height: 100,
  },
});

//make this component available to the app
export default SmallCard;
