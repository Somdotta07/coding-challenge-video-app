import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {useAuth} from '../contexts/AuthContext'

function Header() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("")
    try {
      await logout();
      history.pushState('/login');
     }
    catch {
      setError('Failed to log out')
    }
  }
  return (
    <header>
      {error}
      <Link to="/">
        <i className="fa fa-less-than sign"></i>
      </Link>
      <div><span><strong>Email:</strong>{currentUser.email}</span></div>
      <h1 className="logo">vi-stream</h1>
      <div>
        <button className="btn btn-link" onClick={handleLogout}>Log out</button>
      </div>
    </header>
  );
}

export default Header;
