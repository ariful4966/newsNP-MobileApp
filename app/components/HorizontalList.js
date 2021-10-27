//import liraries
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import SmallCard from './SmallCard';
import Title from './Title';

// create a component
const HorizontalList = ({title, data}) => {
  return (
    <>
      <Title size={20}>{title}</Title>
      <View style={styles.listStayle}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=><SmallCard  item={item}/>}
      />
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
 listStayle:{
     marginVertical:15
 }
});

//make this component available to the app
export default HorizontalList;
