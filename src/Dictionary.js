import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");

  //API documentation: https://dictionaryapi.dev/
  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault(event);

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }

  function getKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="What is..." onChange={getKeyword} />
      </form>
    </div>
  );
}
