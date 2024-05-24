import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <div className="header-items">
        <div className="heading-container">
          <img
            src="https://res.cloudinary.com/djfbwkdh3/image/upload/v1716445734/download_xforvx.jpg"
            className="logo-image"
            alt="Indigo Learn Logo"
          />
          <h1>Indigo Learn</h1>
        </div>
        <ul className="header-list-items">
          <li>
            <Link className="header-list-item" to="/">
              Become an ACCA
            </Link>
          </li>
          <li style={{ marginRight: "10px" }}>|</li>
          <li>
            <Link className="header-list-item" to="/Why-choose-us">
              Why Choose Us
            </Link>
          </li>
          <li style={{ marginRight: "10px" }}>|</li>
          <li>
            <Link className="header-list-item" to="/eligibility">
              Eligibility
            </Link>
          </li>
          <li style={{ marginRight: "10px" }}>|</li>
          <li>
            <Link className="header-list-item" to="/Things-provided">
              Things provided
            </Link>
          </li>
          <li style={{ marginRight: "10px" }}>|</li>
          <li>
            <Link className="header-list-item" to="/Placements">
              Placements
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
