import React from "react";
import "./Header.css";

class Header extends React.Component {
  state = {
    navbar: [
      "The Edit",
      "New Arrivals",
      "Designers",
      "Clothing",
      "Shoes",
      "Bags",
      "Accessories",
      "Jewelry",
      "Beauty",
      "home",
    ],
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div>
            <a className="navbar-brand" href="#">
              MY COMPANY.COM
            </a>
          </div>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <div className="navbar-nav me-auto mb-2 mb-lg-0">
                    {this.state.navbar.map((ele) => (
                      <a
                        key={ele}
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        {ele}
                      </a>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img src="/Search.svg" />
            <img src="/Bag.svg" />
            <img id="user" src="/Account.svg" />
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
