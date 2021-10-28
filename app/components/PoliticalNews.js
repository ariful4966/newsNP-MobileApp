//import liraries
import React from 'react';
import VerticlList from './VerticalList';

// create a component
const PoliticalNews = ({data}) => {
    return (
       <VerticlList title="Political News" data={data}/>
    );
};

// define your styles


//make this component available to the app
export default PoliticalNews;
