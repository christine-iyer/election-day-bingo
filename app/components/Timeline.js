import { useState } from "react";

const Timeline = ({ events }) => {
     return (
          <div style={{ borderLeft: "2px solid #ddd", paddingLeft: "20px" }}>
               {events.map((event, index) => (
                    <TimelineItem key={index} {...event} />
               ))}
          </div>
     );
};

const TimelineItem = ({ date, title, description, details, winner, abortion, zone }) => {
     const [isExpanded, setIsExpanded] = useState(false);

     const truncateText = (text, maxLength) => {
          if (text.length <= maxLength) return text;
          return text.slice(0, maxLength) + "...";
     };

     const toggleExpand = () => setIsExpanded(!isExpanded);
     const color = winner === "Biden D" ? "blue" : winner === "Trump R" ? "red" : "black";
     return (
          <div style={{ marginBottom: "20px", borderStyle:'groove' }}>
               <p><strong>{date}</strong></p>
               <p>
                    <span style={{ color }}>{title}</span>
               </p>
               <p>
               <strong>Zone:</strong>{" "}
                    <strong>{zone}</strong>
               </p>
               <p>
               <strong>Abortion on the Ballot?:</strong>{" "}
                    <strong>{abortion}</strong>
               </p>
               <p>
                    <strong>House Notes:</strong>{" "}
                    {isExpanded ? description : truncateText(description, 20)}
               </p>
               <p>
                    <strong>Senate Notes:</strong>{" "}
                    {isExpanded ? details : truncateText(details, 20)}
               </p>
               <button onClick={toggleExpand} style={{ background: "none", color: "blue", border: "none", cursor: "pointer" }}>
                    {isExpanded ? "See Less" : "See More"}
               </button>
          </div>
     );
};

export default Timeline;
