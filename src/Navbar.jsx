import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg" >
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/" style={{fontWeight:'bold',fontSize:'40px'}}><strong style={{color:'purple'}}>C</strong>hauhan <strong style={{color:'purple'}}>S</strong>pare <strong style={{color:'purple'}}>P</strong>arts</NavLink>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" activeClassName="menu_active" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu_active" to="/service">Service</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu_active" to="/about">About Us</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu_active" to="/contact">Contact Us</NavLink>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;