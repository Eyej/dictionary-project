import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  console.log(props.data);

  if (props.data) {
    return (
      <div className="Results">
        <h2>
          <a
            href={props.data.phonetics[0].audio}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-volume-up "></i>
          </a>{" "}
          {props.data.word}
          {/* {audio} {props.data.word} */}
        </h2>
        {props.data.phonetics.map(function (phonetic, index) {
          return <span key={index}>{phonetic.text}</span>;
        })}
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
