import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section className="boxes">
        <h5>{props.meaning.partOfSpeech}</h5>
        <h6>Definition:</h6>
        <p>{props.meaning.definition}</p>
        <Example example={props.meaning.example} />
        <Synonyms synonym={props.meaning.synonyms} />
      </section>
    </div>
  );
}
