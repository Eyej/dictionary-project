import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (item, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {item.definition} <br />
              <strong>Example: </strong>
              <em>{item.example}</em>
            </p>
            <Synonyms synonyms={item.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
