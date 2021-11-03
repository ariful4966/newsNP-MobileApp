//import liraries
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Subtitle from './Subtitle';
import Title from './Title';

// create a component
const BlockCard = ({style, imageStyle, item}) => {
  const {title, content, id, thumbnail,}=item
  return (
    <View style={[styles.container, style]}>
      <Image
        source={{uri:thumbnail}}
        style={[styles.image, imageStyle]}
      />
      <View style={styles.contentContainer}>
        <Title>
         {title}
        </Title>
        <Subtitle>
          {content}
        </Subtitle>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
});

//make this component available to the app
export default BlockCard;
