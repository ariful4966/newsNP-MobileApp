//import liraries
import React from 'react';
import BlockCard from './BlockCard';

// create a component
const FetureNews = ({item}) => {
  return <BlockCard item={item} style={{marginVertical: 15}} />;
};

// define your styles

//make this component available to the app
export default FetureNews;
