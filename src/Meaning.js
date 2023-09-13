import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      <h6>Definition:</h6>
      <p>{props.meaning.definition}</p>
      <Example example={props.meaning.example} />
      <Synonyms synonym={props.meaning.synonyms} />
    </div>
  );
}
