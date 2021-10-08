import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavbarComponent() {
  const user = JSON.parse(localStorage.getItem("userData"));
  console.log(user);
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userData");
    window.location.href = "/";
  };

  return (
    <div>
      <nav className="dark:bg-gray-800">
        <div className="container Navbar-container dark:text-gray-300">
          <Link to="/" className="links dark:hover:text-gray-200">
            home
          </Link>
          {user ? (
            <div>
              <Link to="/create" className="links dark:hover:text-gray-200">
                Update/Create
              </Link>

              <button
                onClick={handleLogout}
                className="links dark:hover:text-gray-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link to="/login" className="links dark:hover:text-gray-200">
                Signin
              </Link>

              <Link to="/register" className="links dark:hover:text-gray-200">
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
