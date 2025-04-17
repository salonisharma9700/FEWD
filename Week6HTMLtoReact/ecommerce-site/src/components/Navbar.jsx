import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">E-Shop</Link>

        {/* Navbar Toggle for Mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          <form className="d-flex mx-3">
            <input type="text" className="form-control me-2" placeholder="Search products..." />
            <button
              className="btn btn-warning"
              type="button"
              onClick={() => navigate("/newsletter")} 
            >
              🛒 Cart
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
