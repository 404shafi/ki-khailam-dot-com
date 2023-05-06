import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid bg-dark p-3">
      <nav className="d-flex justify-content-between">
        <Link className="text-decoration-none" to="/">
          Ki Khailam
        </Link>
        <div className="d-flex justify-content-between">
          <Link className="mx-2 text-decoration-none" to="todaystake">
            Todays Take
          </Link>
          <Link className="mx-2 text-decoration-none" to="overview">
            Overview
          </Link>
          <Link className="mx-2 text-decoration-none" to="eat">
            Eat
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
