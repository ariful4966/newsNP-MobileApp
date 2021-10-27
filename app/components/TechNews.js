//import liraries
import React from 'react';
import HorizontalList from './HorizontalList';

// create a component
const TechNews = ({data}) => {
    return (
       <HorizontalList title="Techknowlogy News" data={data}/>
    );
};

// define your styles


//make this component available to the app
export default TechNews;
