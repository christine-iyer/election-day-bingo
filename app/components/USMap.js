import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

export default function USMap() {
  const [geoData, setGeoData] = useState(null);
  const [stateSelections, setStateSelections] = useState({
    Alabama: 'white',
    Alaska: 'white',
    Arizona: 'white',
    Arkansas: 'white',
    California: 'white',
    Colorado: 'white',
    Connecticut: 'white',
    Delaware: 'white',
    "District of Columbia": 'white',
    Florida: 'white',
    Georgia: 'white',
    Hawaii: 'white',
    Idaho: 'white',
    Illinois: 'white',
    Indiana: 'white',
    Iowa: 'white',
    Kansas: 'white',
    Kentucky: 'white',
    Louisiana: 'white',
    Maine: 'white',
    Maryland: 'white',
    Massachusetts: 'white',
    Michigan: 'white',
    Minnesota: 'white',
    Mississippi: 'white',
    Missouri: 'white',
    Montana: 'white',
    Nebraska: 'white',
    Nevada: 'white',
    "New Hampshire": 'white',
    "New Jersey": 'white',
    "New Mexico": 'white',
    "New York": 'white',
    "North Carolina": 'white',
    "North Dakota": 'white',
    Ohio: 'white',
    Oklahoma: 'white',
    Oregon: 'white',
    Pennsylvania: 'white',
    "Rhode Island": 'white',
    "South Carolina": 'white',
    "South Dakota": 'white',
    Tennessee: 'white',
    Texas: 'white',
    Utah: 'white',
    Vermont: 'white',
    Virginia: 'white',
    Washington: 'white',
    "West Virginia": 'white',
    Wisconsin: 'white',
    Wyoming: 'white'
  });

  useEffect(() => {
    d3.json("/us-states.geojson").then(data => {
      setGeoData(data);
    }).catch(error => {
      console.error("Error loading geojson data:", error);
    });
  }, []);

  // Define projection and path generator
  const projection = d3.geoAlbersUsa().scale(1000).translate([400, 250]); // Center and scale
  const pathGenerator = d3.geoPath().projection(projection);

  const handleStateSelection = (stateName, selection) => {
    setStateSelections(prevState => ({
      ...prevState,
      [stateName]: selection,
    }));
  };

  return (
    <svg width={800} height={500}>
      {geoData && geoData.features.map((feature) => {
        const stateName = feature.properties.NAME;
        const fillColor = stateSelections[stateName] || "white"; // default color

        return (
          <path
            key={stateName}
            d={pathGenerator(feature)}
            fill={fillColor}
            stroke="gray"
            onClick={() => handleStateSelection(stateName, "blue")} // example click handler
          />
        );
      })}
    </svg>
  );
}
