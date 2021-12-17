import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar w/ text
        </Link>

        <div className="" id="navbarText">
          <ul className="d-flex ">
            <li className="nav-item">
              <Link
                className="nav-link active text-white p"
                aria-current="page"
                to="/employee"
              >
                Employee
              </Link>
            </li>
            <li className="nav-item">
              <Link 
              className="nav-link text-white" 
              to="/dept">
                Department
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
