import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg" style={navbarStyle}>
        <div className="container px-4 px-lg-5">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src="./video/logo.png"
              alt="Logo"
              style={{ height: "50px", width: "auto" }}
            />
            <span style={logoTextStyle} className="ms-2"></span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ borderColor: "#ffffff" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item mx-3">
                <Link
                  to="/"
                  className="nav-link"
                  style={linkStyle}
                  onMouseOver={(e) => (e.target.style.color = "#ffa500")}
                  onMouseOut={(e) => (e.target.style.color = "#ffffff")}
                >
                  <i className="fas fa-home"></i> 
                </Link>
              </li>

              <li className="nav-item mx-3">
                <Link
                  to="/ListPages"
                  className="nav-link"
                  style={linkStyle}
                  onMouseOver={(e) => (e.target.style.color = "#32cd32")}
                  onMouseOut={(e) => (e.target.style.color = "#ffffff")}
                >
                  <i className="fa-solid fa-list"></i> 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

const navbarStyle = {
  background: "linear-gradient(90deg, #6a11cb, #2575fc)", 
  color: "#ffffff",
  padding: "10px 0",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

const logoTextStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#ffffff",
};

const linkStyle = {
  color: "#ffffff",
  fontSize: "1.2rem",
  textDecoration: "none",
  transition: "color 0.3s ease",
};
