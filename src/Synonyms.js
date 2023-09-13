import React from "react";

export default function Synonyms(props) {
  if (props.synonym) {
    return (
      <div className="Synonyms">
        <h6>Synonyms</h6>
        <ul>
          {props.synonym.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
