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
          <div className="photo-credit">
            Images provided by <a href="https://www.pexels.com">Pexels</a>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
