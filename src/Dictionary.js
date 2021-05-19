import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    // console.log(response.data);
    setResults(response.data[0]);
  }

  function search() {
    //API documentation: https://dictionaryapi.dev/
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault(event);
    search();
  }

  function getKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              defaultValue={props.defaultKeyword}
              onChange={getKeyword}
            />
          </form>
          <small>Suggested words: sunrise, cookies, family, pets ...</small>
        </section>
        <Results data={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
