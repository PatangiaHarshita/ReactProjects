import React from "react";
import "./Section.css";
export default function Section1() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid leftcontent">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  delivery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  fit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  share
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
        lavishness by night and by day: a blazer in a linen blend shot with
        lurex for a shimmering surface that shines like a star in the sky. it
        has a straight fit with well defined shoulders and a shawl collar
        culminating in a button and has been flawlessly finished with three jet
        pockets with a sartorial feel.
      </div>
      <p>
        See the <a href="#">EDITOR’S NOTE</a>
      </p>
      <p>
        Learn about the
        <a href="#">DESIGNER</a>
      </p>
    </div>
  );
}
