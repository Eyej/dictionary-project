import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.data) {
    return (
      <section className="Images">
        <div className="row">
          {props.data.map(function (item, index) {
            return (
              <div className="col-4" key={index}>
                <a href={item.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={item.src.landscape}
                    alt={props.query}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>

        <div className="photo-credit">
          Photo-credit: <a href="https://www.pexels.com">Provided by Pexels</a>
        </div>
      </section>
    );
  }
  return null;
}
