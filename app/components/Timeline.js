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

const TimelineItem = ({ date, title, description, details, winner }) => {
     const [isExpanded, setIsExpanded] = useState(false);

     const truncateText = (text, maxLength) => {
          if (text.length <= maxLength) return text;
          return text.slice(0, maxLength) + "...";
     };

     const toggleExpand = () => setIsExpanded(!isExpanded);
     const color = winner === "Biden D" ? "blue" : winner === "Trump R" ? "red" : "black";
     return (
          <div style={{ marginBottom: "20px" }}>
               <p><strong>{date}</strong></p>
               <p>
                    <strong>Title:</strong>{" "}
                    <span style={{ color }}>{title}</span>
               </p>
               <p>
                    <strong>Description:</strong>{" "}
                    {isExpanded ? description : truncateText(description, 50)}
               </p>
               <p>
                    <strong>Details:</strong>{" "}
                    {isExpanded ? details : truncateText(details, 50)}
               </p>
               <button onClick={toggleExpand} style={{ background: "none", color: "blue", border: "none", cursor: "pointer" }}>
                    {isExpanded ? "See Less" : "See More"}
               </button>
          </div>
     );
};

export default Timeline;
