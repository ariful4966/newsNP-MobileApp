//import liraries
import React from 'react';
import BreakingNews from './app/components/BrkingNews';
import EntertainmentNews from './app/components/EnterntainmentNews';
import FeatureNews from './app/components/FetureNews';
import PoliticalNews from './app/components/PoliticalNews';
import Screen from './app/components/Screen';
import SearchBar from './app/components/SearchBar';
import TechNews from './app/components/TechNews';
import useNews from './app/hooks/useNews';


// create a component
const App = () => {
 
const [ featuredNews, breakingNews, politicalNews, techNews, entertainmentNews]= useNews()

  return (
    <Screen>
      <SearchBar></SearchBar>
      <FeatureNews item={featuredNews}/>
      <BreakingNews data={breakingNews} />
      <PoliticalNews data={politicalNews}/>
      <TechNews data={techNews}/>
      <EntertainmentNews data={entertainmentNews}/>
    </Screen>
)
};



export default App;
