import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  console.log(props.data);

  if (props.data) {
    return (
      <div className="Results">
        <h1>{props.data.word}</h1>

        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
