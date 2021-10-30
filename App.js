//import liraries
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import Screen from './app/components/Screen';
import data from './assets/news';

// create a component
const App = () => {
  const [num, setNum] = useState(0);

  // const useState = (initialValue)=>{
  //   let state = initialValue;

  //   function functionToResetState(value){
  //     state = value
  //   }

  //   return [state, functionToResetState]
  // }

  useEffect(() => {
    setTimeout(() => {
      setNum(num + 5);
    }, 4000);
  }, [num]);

  const breakingNews = data.filter(item => item.category === 'breaking-news');
  const techNews = data.filter(item => item.category === 'tech');
  const politicalNews = data.filter(item => item.category === 'political');
  const entertainmentNews = data.filter(
    item => item.category === 'entertainment',
  );

  return (
    <Screen>
      {/* <SearchBar  />
      <FetureNews  item={data[1]}/> 
      <BreakingNews data={breakingNews} />
      <PoliticalNews data={politicalNews}/>
      <TechNews data={techNews}/>
      <EntertainmentNews data={entertainmentNews}/> */}
      <Text>{num}</Text>
    </Screen>
  );
};

// define your styles
// const styles = StyleSheet.create({
//   container: {},
// });
//make this component available to the app
export default App;
