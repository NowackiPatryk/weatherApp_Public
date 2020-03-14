import React from 'react';
import '../styles/App.scss';
import CityBar from './CityBar';
import IconsBar from './IconsBar';
import TempBar from './TempBar';
import WeatherDataContextProvider from '../stores/WeatherDataContext';

function App() {

  return (
    <div className="App">
      <WeatherDataContextProvider>
        <CityBar/>
        <IconsBar/>
        <TempBar/>
      </WeatherDataContextProvider>
    </div>
  );
  
}

export default App;
