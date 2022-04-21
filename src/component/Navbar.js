import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// import Logo from "../google.png"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top nav" role="navigation">
            <div className="container">
                {/* <a className="navbar-brand" href="#"><img classname="logo" src={Logo}/></a> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i class="fa fa-bars" aria-hidden="true" style={{color:"#fff"}}></i></span>
                </button>
               
                

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"about"}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"skill"}>Skill</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Project</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/achieve"}>Achievement</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar