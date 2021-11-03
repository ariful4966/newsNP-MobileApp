//import liraries
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './Title';
import VerticalCard from './VerticalCard';

// create a component
const VerticlList = ({title, data}) => {
  return (
    <View style={styles.container}>
      <Title>{title}</Title>
      <View style={styles.contentContainer}>
        {data.map(item => (
          <VerticalCard item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    marginVertical: 15,
  },
});

//make this component available to the app
export default VerticlList;
