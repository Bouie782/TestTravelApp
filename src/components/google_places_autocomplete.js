import React from 'react';
import { useRef, useEffect } from "react";
const AutoComplete = () => {
 const autoCompleteRef = useRef();
 const inputRef = useRef();
 const options = {
  componentRestrictions: { country: "usa" },
  fields: ["address_components", "geometry", "icon", "name"],
  types: ["establishment"]
//   url: https://maps.googleapis.com/maps/api/place/textsearch/json?query=[yourquerystring]&key=[YOURAPIKEY]
 };
 useEffect(() => {
  autoCompleteRef.current = new window.google.maps.places.Autocomplete(
   inputRef.current,
   options
  );
 }, []);
 return (
  <div>
   <label>enter address :</label>
   <input ref={inputRef} />
  </div>
 );
};
export default AutoComplete;