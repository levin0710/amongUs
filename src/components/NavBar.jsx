
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import './NavBar.css'
const NavBar = () => {
  
    return (
        <div className="">        
            <div  className="App-sidebar">
                <div className="Menu">     
                    <ul>
                        <li className="Menu-item">
                                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                                <Link className="link" style={{ textDecoration: 'none' }} to="/">
                                    Home
                                </Link>
                        
                        </li>
                        <li className="Menu-item">
                            <a className="menu-link">
                                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                                <Link className="link" style={{ textDecoration: 'none' }} to="/new">
                                    Create a new Crewmate
                                </Link>
            
                            </a>
                        </li>
                        <li className="Menu-item">
                            <a className="menu-link" ><i class="menu-icon tf-icons bx bx-home-circle"></i>
                                <Link className="link" style={{ textDecoration: 'none' }} to="/gallery">
                                    Crewmate Gallery
                                </Link>
                            </a>
                        </li>
                    </ul> 
                </div>       
            </div>
            <div className='App'>
                <Outlet></Outlet>
            </div>
        </div>
        
      );
};

  
  
export default NavBar;
