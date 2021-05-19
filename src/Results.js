import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  //   console.log(props.data);

  if (props.data) {
    return (
      <div className="Results">
        <section>
          <h2>
            <a
              href={props.data.phonetics[0].audio}
              target="_blank"
              rel="noreferrer"
              className="audio"
            >
              <i className="fas fa-volume-down"></i>
            </a>{" "}
            {props.data.word}
            {/* {audio} {props.data.word} */}
          </h2>
          <div className="phonetic-text">
            {props.data.phonetics.map(function (phonetic, index) {
              return <p key={index}>{phonetic.text}</p>;
            })}
          </div>
        </section>
        {/* <section> */}
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <section>
                <Meaning meaning={meaning} />
              </section>
            </div>
          );
        })}
        {/* </section> */}
      </div>
    );
  } else {
    return null;
  }
}
