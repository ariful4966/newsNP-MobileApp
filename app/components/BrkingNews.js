//import liraries
import React from 'react';
import HorizontalList from './HorizontalList';

// create a component
const BreakingNews = ({data}) => {
    return (
       <HorizontalList title="Breadking News" data={data}/>
    );
};

// define your styles


//make this component available to the app
export default BreakingNews;
