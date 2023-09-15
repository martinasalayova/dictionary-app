import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [photo, setPhoto] = useState(null);

  function Search(event) {
    event.preventDefault();
    let key = "47o34b3647d947a0ede6tfa4933e309a";
    let word = `${keyword}`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;
    axios.get(apiUrl).then(handleResponse);

    const imgKey = "47o34b3647d947a0ede6tfa4933e309a";
    const imgUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${imgKey}`;
    axios.get(imgUrl).then(handleImgResponse);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImgResponse(response) {
    setPhoto(response.data.photos);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <p>What would you like to look up?</p>
      <form onSubmit={Search}>
        <input
          type="search"
          placeholder="Search for.."
          onChange={handleKeywordChange}
        ></input>
      </form>
      <Photos photo={photo} />
      <Results results={results} />
    </div>
  );
}
