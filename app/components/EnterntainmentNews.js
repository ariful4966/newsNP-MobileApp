//import liraries
import React from 'react';
import VerticlList from './VerticalList';

// create a component
const EntertainmentNews = ({data}) => {
    return (
       <VerticlList title="Entertainment News" data={data}/>
    );
};

// define your styles


//make this component available to the app
export default EntertainmentNews;
