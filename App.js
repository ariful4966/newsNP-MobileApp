//import liraries
import React from 'react';
import BreakingNews from './app/components/BrkingNews';
import EntertainmentNews from './app/components/EnterntainmentNews';
import FetureNews from './app/components/FetureNews';
import PoliticalNews from './app/components/PoliticalNews';
import Screen from './app/components/Screen';
import SearchBar from './app/components/SearchBar';
import TechNews from './app/components/TechNews';
import data from './assets/news';

// create a component
const App = () => {
  const breakingNews = data.filter(item=>item.category === 'breaking-news')
  const techNews = data.filter(item=>item.category === 'tech')
  const politicalNews = data.filter(item=>item.category === 'political')
  const entertainmentNews = data.filter(item=>item.category === 'entertainment')
 
  return (
    <Screen>
      <SearchBar  />
      <FetureNews  item={data[1]}/> 
      <BreakingNews data={breakingNews} />
      <PoliticalNews data={politicalNews}/>
      <TechNews data={techNews}/>
      <EntertainmentNews data={entertainmentNews}/>
    </Screen>
  );
};

// define your styles
// const styles = StyleSheet.create({
//   container: {},
// });
//make this component available to the app
export default App;
