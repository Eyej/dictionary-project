import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  console.log(props.data);

  if (props.data) {
    return (
      <div className="Results">
        <p>Hello, here's the definition for</p>
        <p>{props.data.word}</p>
        <Meanings data={props.data.meanings} />
        {/* <p>{props.data[0].meanings[0].defintions[0].definition}</p> */}
      </div>
    );
  } else {
    return null;
  }
}
