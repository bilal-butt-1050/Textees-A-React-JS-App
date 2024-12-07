import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const handletitle = ()=>{
    document.title = "Textees - About";
  }

  const handletitleh = ()=>{
    document.title = "Textees - Home";
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" onClick={handletitleh}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" onClick={handletitle}>{props.about}</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Theme
          </a>
          <ul className="dropdown-menu">
            <div className="form-check form-switch">
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.display}</label>
            <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            </div>  
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" 
        aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired   
};

Navbar.defaultProps = {
    about: "About Us"
};