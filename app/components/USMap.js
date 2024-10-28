// components/USMap.js
"use client";
import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import usMap from "/path/to/us-states.geojson"; 

const USMap = () => {
  const [colorData, setColorData] = useState({
AL: 'white',
AK: 'white',
AZ: 'white',
AR: 'white',
CA: 'white',
CO: 'white',
CT: 'white',
DE: 'white',
DC: 'white',
FL: 'white',
GA: 'white',
HI: 'white',
ID: 'white',
IL: 'white',
IN: 'white',
IA: 'white',
KS: 'white',
KY: 'white',
LA: 'white',
ME : 'white',
MD: 'white',
MA: 'white',
MI: 'white',
MN: 'white',
MS: 'white',
MO: 'white',
MT: 'white',
NE: 'white',
NV: 'white',
NH: 'white',
NJ: 'white',
NM: 'white',
NY: 'white',
NC: 'white',
ND: 'white',
OH: 'white',
OK: 'white',
OR: 'white',
PA: 'white',
RI: 'white',
SC: 'white',
SD: 'white',
TN: 'white',
TX: 'white',
UT: 'white',
VT: 'white',
VA: 'white',
WA: 'white',
WV: 'white',
WI: 'white',
WY: 'white'
    });

  useEffect(() => {
    const svg = d3.select("#us-map");
    const projection = d3.geoAlbersUsa().scale(1000).translate([500, 300]);
    const path = d3.geoPath().projection(projection);

    d3.json(usMap).then((data) => {
      svg.selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", (d) => colorData[d.properties.STUSPS]) // Use colorData for state colors
        .attr("stroke", "#333")
        .on("click", (event, d) => handleStateClick(d.properties.STUSPS)); // Add click handler
    });
  }, [colorData]);

  const handleStateClick = (stateCode) => {
    const newColor = prompt("Enter color (red, blue, stripes):", colorData[stateCode]);
    setColorData({ ...colorData, [stateCode]: newColor });
  };

  return <svg id="us-map" width={1000} height={600}></svg>;
};

export default USMap;
