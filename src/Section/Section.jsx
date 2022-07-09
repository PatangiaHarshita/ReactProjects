import React, { Component } from "react";
import Section1 from "./Section1";
import Section2desktop from "./Section2desktop";
import Section3 from "./Section3";
import "./Section.css";
import Section2mobile from "./Section2mobile";

export default class Section extends Component {
  state = {
    isMobile: false,
  };
  componentDidMount() {
    window.addEventListener("resize", this.evaluateSection2);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.evaluateSection2);
  }
  evaluateSection2 = () => {
    let isMobile = window.matchMedia("(max-width: 420px)").matches;
    console.log("check", isMobile);
    this.setState({ isMobile });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-12 hide">
            <div className="stickysides">
              <Section1 />
            </div>
          </div>
          <div className="col-sm-5 col-12">
            {this.state.isMobile ? <Section2mobile /> : <Section2desktop />}
          </div>

          <div className="col-sm-1 hide">
            <img className="stickysides" src="/heart.svg" />
          </div>

          <div className="col-sm-3 col-12">
            <div className="stickysides">
              <Section3 />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
