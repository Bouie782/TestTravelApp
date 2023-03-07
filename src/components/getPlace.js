import React from 'react';

//   url: https://maps.googleapis.com/maps/api/place/textsearch/json?query=[yourquerystring]&key=[YOURAPIKEY]

function GetPlace(props) {
    var map;
    var service;
    var currentQuery = "restaurant"
    
    function initialize() {
      var pyrmont = new window.google.maps.LatLng(47.6256,122.3344);
    
      map = new window.google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          zoom: 15
        });
    
      var request = {
        location: pyrmont,
        radius: '2000',
        query: currentQuery
      };
    
      service = new window.google.maps.places.PlacesService(map);
      service.textSearch(request, callback);
    }
    
    function callback(results, status) {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        const jsonContent = JSON.stringify(results);
        
        var fs = require('fs');
        fs.writeFile('../data/myjsonfile.json', jsonContent, 'utf8');
      }
    }

  return (
    <div>
      <header>
              <button onClick={initialize()}>
                Get new Place
              </button>
      </header>
    </div>
  );
}

export default GetPlace;