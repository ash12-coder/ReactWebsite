import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';
import {NavLink} from 'react-router-dom';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
const NavBar = () =>{
    return(     
        <> 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div className="container">
    <a className="navbar-brand" href="#">
        <h1><FilterHdrIcon />India'sAdventure</h1>
        </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">Home
                <span className="sr-only">(current)</span>
              </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/destination">Our Destination</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/plans">Our Plans</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

</>
    )
}

export default NavBar;