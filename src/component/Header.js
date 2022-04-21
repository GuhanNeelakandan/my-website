import React from 'react';
import { Link } from 'react-router-dom';
import Type from "react-typed"
import Animated from '../Animated';
import Resume from "../guhan.pdf"
import Download from "../download.gif"

function Header() {
  return (
    <Animated>
      <div className="header-wrapper">
        <div className="main-info">
          <h3>Hello, I am</h3>
          <h1><strong>GUHAN N S</strong></h1>
          <Type
            className="type-string"
            strings={["Full Stack Developer", "photoshop Editor", "Designer"]}
            typeSpeed={60}
            backSpeed={60}
            loop />
          <a href={Resume} target="_blank" className="btn-main-offer">Get Resume <img className='icon' src={Download} style={{width:"20px", height:"20px"}}/> </a>
          <Link class="btn btn-dark  mt-4 btns" to={"/about"} role="button">About me  <i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
        </div>
      </div>
    </Animated>
  )
}

export default Header