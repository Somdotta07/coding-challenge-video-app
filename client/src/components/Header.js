import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <i className="fa fa-less-than sign"></i>
      </Link>
      <h1 className="logo">vi-stream</h1>
    </header>
  );
}

export default Header;
