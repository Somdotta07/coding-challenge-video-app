import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.pushState("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    
      <nav className="navbar navbar-light" style= {{backgroundColor: "#f65487"}}>
        {error}
        <Link to="/" className="navbar-brand">
          <i className="fa fa-less-than sign"> VI-stream </i>
        </Link>
        <form className="form-inline">
          <div>
            <span>
              <strong>Welcome </strong>
              {currentUser.email}
            </span>
          </div>
          <button className="btn btn-link"  onClick={handleLogout}>
            
Log out
</button>
        </form>
      </nav>
    
  );
}

export default Header;
