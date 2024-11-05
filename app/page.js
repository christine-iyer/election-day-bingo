"use client";
import { useState} from "react";
import { getCombinedData } from "./utils/data";
import { formatTime } from "./utils/helpers";
import USMap from './components/USMap'
// import BingoCard from "./components/BingoCard"
import HistoricalMap from './components/HistoricalMap'
import ZoneGrid from './components/ZoneGrid'



export default function Home() {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  // const [data, setData] = useState([]); // Store fetched data
  const events = getCombinedData()
  .map((item) => ({
    date: formatTime(item.AnticipatedCall),
    title: item.State,
    abortion: item.AbortionOnBallot,
    description: item.HouseNotes,
    details: item.SenateNotes,
    winner: item.WinnerTwenty,
    zone: item.Zone,
    time: new Date(`1970-01-01T${item.AnticipatedCall.slice(-11)}`).getTime(), // Parse time
    }))
    .sort((a, b) => {
      // First, sort by time
      if (a.time !== b.time) {
        return a.time - b.time;
      }
      // If times are equal, sort alphabetically by title (state name)
      return a.title.localeCompare(b.title);
    });


  const fetchData = async () => {
    try {
      const response = await fetch("/api/data", { method: "GET" });
      if (!response.ok) throw new Error("Failed to fetch data");
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!name || !population) {
  //     console.error("Name and population are required fields.");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("/api/data", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ name, population }),
  //     });

  //     if (response.ok) {
  //       console.log("Data submitted successfully");
  //       setName(""); // Clear input after submission
  //       setPopulation("");
  //       await fetchData();
  //     } else {
  //       console.error("Failed to submit data:", await response.json());
  //     }
  //   } catch (error) {
  //     console.error("Error submitting data:", error);
  //   }
  // };

  return (
    <div>


     
    {/* <h1>Interactive Bingo Game</h1>
    <BingoCard /> */}
    <div>     
       
      {/*<h1>Data List</h1> 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
        />
        <input
          type="number"
          placeholder="Population"
          value={population}
          onChange={(e) => setPopulation(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form> */}

      {/* <h2>Updated Data:</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name} - Population: {item.population}
          </li>
        ))}
      </ul> */}
  
      </div>
      <div>
      <ZoneGrid events={events} />
    </div>
    <div>
      <h1>Interactive U.S. Map</h1>
      <hr></hr>
      <USMap />
    </div>
    <div>
     <HistoricalMap />
    </div>
    


    </div>
  );
}
