import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div>
      <nav className="navbar text-dark">
        <div className="m-2 float-center">
          <h3 className=" text-dark px-5 m-2 float-center"> Midterm Project</h3>
        </div>
        <div>
          <Link className="btn btn-outline-dark ms-3 btn-sm" to="/">Home</Link>
          <Link className="btn btn-outline-dark ms-3 btn-sm" to="/venues">Venues</Link>
          <Link className="btn btn-outline-dark ms-3 btn-sm me-5" to="/about">About</Link>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Navbar;
