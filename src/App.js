import React from 'react';
import Header from './components/Header/header';
import List from './components/List/list';
import Map from './components/Map/map';
import Placedetails from './components/Placedetails/placedetails';

const App = () => {
  return (
    <div className="App">
      <Header />     
      <List />
      <Map /> 
      <Placedetails />
    </div>
  );
}

export default App;
