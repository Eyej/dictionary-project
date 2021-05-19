import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (item, index) {
        return (
          <div key={index}>
            <div className="definition">{item.definition}</div>
            <div className="example">{item.example}</div>
            {/* <div className="synonym"> */}
            <Synonyms synonyms={item.synonyms} />
            {/* </div> */}
          </div>
        );
      })}
    </div>
  );
}
