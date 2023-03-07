import './App.css';
import React, {  } from 'react';
import AutoComplete from './components/google_places_autocomplete';
import GetPlace from './components/getPlace';
import { useLoadScript } from "@react-google-maps/api"

function App() {
  const { isLoaded } = useLoadScript({
    gmapikey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  });

  return (
    <div className="App">
      <header className="App-header">
              <AutoComplete></AutoComplete>
              <GetPlace placeType = {"restaurant"} lat = {"47.6256"} lon = {"122.3344"}></GetPlace>
      </header>
    </div>
  );
}

export default App;
