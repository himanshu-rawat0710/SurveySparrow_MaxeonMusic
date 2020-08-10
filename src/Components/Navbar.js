import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className=" nav navbar navbar-expand-lg navbar-dark pt-4">
        <a className="logo navbar-brand ml-md-5" href="/#">
          <h2>
            <strong>Maxeon</strong>
          </h2>
        </a>
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navlinks ml-auto mr-5">
            <li className="nav-item px-4">
              <a className="nav-link" href="/#">
                Products
              </a>
            </li>
            <li className="nav-item px-4">
              <a className="nav-link" href="/#">
                Features
              </a>
            </li>
            <li className="nav-item px-4">
              <a className="nav-link" href="/#">
                Use Cases
              </a>
            </li>
            <li className="nav-item px-4">
              <a className="nav-link" href="/#">
                Pricing
              </a>
            </li>

            <li
              className="nav-item px-5 circular-design"
              style={{ backgroundColor: "white" }}
            >
              <a
                className="nav-link active-black"
                href="/#"
                style={{ color: "black" }}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
