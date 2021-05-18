import React from "react";
export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <li key={index}>
              <strong>Synonyms: </strong>
              {synonym}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}