//import liraries
import React from 'react';
import Screen from './app/components/Screen';
import SearchBar from './app/components/SearchBar';

// create a component
const App = () => {
  return (
    <Screen>
      <SearchBar />
    </Screen>
  );
};

// define your styles
// const styles = StyleSheet.create({
//   container: {},
// });
//make this component available to the app
export default App;
