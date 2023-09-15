import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photo) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photo.map(function (photos, index) {
            if (index < 4) {
              return (
                <div className="col-sm-3" key={index}>
                  <img
                    src={photos.src.portrait}
                    className="img-fluid"
                    alt=""
                  ></img>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}
