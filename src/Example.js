import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <h6>Example:</h6>
        <p>{props.example}</p>
      </div>
    );
  } else {
    return null;
  }
}
