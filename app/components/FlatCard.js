//import liraries
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Subtitle from './Subtitle';
import Title from './Title';

// create a component
const FlatCard = ({item}) => {
  const {title, content, id, thumbnail} = item;
  return (
    <View style={styles.container}>
      <Image source={thumbnail} style={styles.image} />
      <View style={styles.contentContainer}>
        <Title>{title}</Title>
        <Subtitle>{content}</Subtitle>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    flex: 0.35,
    height: '100%',
  },
  contentContainer: {
    flex: 0.65,
    paddingHorizontal: 5,
  },
});

//make this component available to the app
export default FlatCard;
