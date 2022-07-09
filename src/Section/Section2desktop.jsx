import React from "react";
import "./Section.css";

function Section2() {
  return (
    <div>
      <div className="grid-item">
        <div>
          <img src={require("./Photos/image409img1.jpg")} />
        </div>
        <div className="grid-container2">
          <div className="grid-item">
            <img src={require("./Photos/image410img2.jpg")} />
          </div>
          <div className="grid-item">
            <img src={require("./Photos/image410img3.jpg")} />
          </div>
        </div>
        <div>
          <img src={require("./Photos/image4094img.jpg")} />
        </div>
        <div>
          <img src={require("./Photos/image4105.jpg")} />
        </div>
      </div>
    </div>
  );
}

export default Section2;
