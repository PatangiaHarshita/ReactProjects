import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="items">
        <a href="#">Jonathan Simkhai</a>

        <a href="#">Blazers</a>

        <a href="#">Viscose</a>
      </div>
      <div className="note">a note from the editor</div>
      <div className="description">
        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
        lavishness by night and by day: a blazer in a linen blend shot with
        lurex for a shimmering surface that shines like a star in the sky.
      </div>
      <div className="designer">
        -By
        <a href="#"> MINNA SHIM </a>
        Fashion Editor
      </div>
    </div>
  );
}
