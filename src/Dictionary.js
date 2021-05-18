import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    // console.log(response.data);
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault(event);

    //API documentation: https://dictionaryapi.dev/
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }

  function getKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="What is..." onChange={getKeyword} />
        </form>
        <small>
          Hint: Search for words like sunrise, cookies, family, pets etc
        </small>
      </section>
      <Results data={results} />
    </div>
  );
}
