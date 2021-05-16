import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <p>First meaning is: {props.data[0].definitions[0].definition}</p>
    </div>
  );
}
