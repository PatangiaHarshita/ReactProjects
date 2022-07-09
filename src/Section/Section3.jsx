import React from "react";
import { useState } from "react";
import "./Section3.css";

export default function Section3() {
  const [size, changesize] = useState("Select size");

  return (
    <div>
      <div>
        <div id="productname">JONATHAN SIMKHAI</div>
        <div id="title">Lurex Linen Viscose Jacket in Conchiglia</div>
        <div id="rate">$225</div>
        <div id="color">Color Conchiglia</div>
        <div className="smallimg">
          <div>
            <img src={require("./Photos/Frame1119.jpg")} />
          </div>
          <div>
            <img src={require("./Photos/Frame1120.jpg")} />
          </div>
        </div>
        <div id="size">size : {size} </div>
        <div>
          {["XS", "S", "M", "L", "XXL"].map((i) => (
            <button
              key={i}
              onClick={() => changesize(i)}
              type="button"
              className="btn btn-outline-dark size"
            >
              {i}
            </button>
          ))}
        </div>
        <button type="button" id="addtobag" className="btn btn-dark">
          ADD TO BAG <img src="/Right.svg" />
        </button>
        <div className="lernmore">
          Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
        </div>
        <div className="chat">Speak to a Personal Stylist CHAT NOW</div>
      </div>
    </div>
  );
}
