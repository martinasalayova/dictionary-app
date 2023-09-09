import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function Search(event) {
    event.preventDefault();
    let key = "47o34b3647d947a0ede6tfa4933e309a";
    let word = `${keyword}`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input
          type="search"
          placeholder="Search for.."
          onChange={handleKeywordChange}
        ></input>
      </form>
      <Results results={results} />
    </div>
  );
}
