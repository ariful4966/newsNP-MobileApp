//import liraries
import React from 'react';
import NewsList from './app/components/NewsList';
import useNews from './app/hooks/useNews';


// create a component
const App = () => {
 
const [ featuredNews, breakingNews, politicalNews, techNews, entertainmentNews]= useNews()

//   return (
//     <Screen>
//       <SearchBar></SearchBar>
//       <FeatureNews item={featuredNews}/>
//       <BreakingNews data={breakingNews} />
//       <PoliticalNews data={politicalNews}/>
//       <TechNews data={techNews}/>
//       <EntertainmentNews data={entertainmentNews}/>
//     </Screen>
// )
return <NewsList/>
};



export default App;
