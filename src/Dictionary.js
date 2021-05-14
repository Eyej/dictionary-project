import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault(event);
    alert(`Searching for the definition of ${keyword}`);
  }

  function getKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter any word"
          onChange={getKeyword}
        />
      </form>
    </div>
  );
}
