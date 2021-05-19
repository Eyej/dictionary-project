import React, { useState } from "react";
import Results from "./Results";
import Images from "./Images";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //API documentation: https://dictionaryapi.dev/
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiURL).then(handleDictionaryResponse);

    //API documentation: https://www.pexels.com/api/documentation/?language=javascript#guidelines
    const pexelkey = "563492ad6f917000010000011dbbf951d76a4ea09f25896e34433a3f";
    let pexelURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let auth = {
      Authorization: `Bearer ${pexelkey}`,
    };
    axios.get(pexelURL, { headers: auth }).then(handlePexelResponse);
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
        <Images data={photos} query={keyword} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
