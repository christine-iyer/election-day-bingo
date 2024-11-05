// components/TimelineCard.js
import React, { useState } from "react";

const TimelineCard = ({ stateName, abortionOnBallot, houseNotes, senateNotes, winner2020 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine color for the state name based on winner2020
  const stateColor = winner2020.includes("Biden") ? "blue" : winner2020.includes("Trump") ? "red" : "black";

  // Check if there is content in either HouseNotes or SenateNotes
  const hasNotes = houseNotes || senateNotes;

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div style={{
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      textAlign: "center",
      color: "black", // Default text color for all content
    }}>
      {/* State name with conditional color */}
      <h3 style={{ color: stateColor }}>{stateName}</h3>

      {/* Abortion on Ballot Line */}
      <p>{abortionOnBallot !== "No" ? "Abortion is on the ballot" : "Abortion is not on the ballot"}</p>

      {/* Other Races line, only if there are notes */}
      {hasNotes && <p>Other Races...</p>}

      {/* See More button, only if there are notes to display */}
      {hasNotes && (
        <button onClick={toggleExpand} style={{ background: "none", color: "blue", border: "none", cursor: "pointer" }}>
          {isExpanded ? "See Less" : "See More"}
        </button>
      )}

      {/* Expanded notes with labels */}
      {isExpanded && (
        <div style={{ textAlign: "left", marginTop: "10px" }}>
          {houseNotes && (
            <div>
              <strong>House Notes:</strong>
              <p>{houseNotes}</p>
            </div>
          )}
          {senateNotes && (
            <div>
              <strong>Senate Notes:</strong>
              <p>{senateNotes}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TimelineCard;
