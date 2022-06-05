import React from 'react';
import { Link } from 'react-router-dom';
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
          <div className='typewriter mt-4'>
          <h1>FULL STACK DEVELOPER.</h1>
          </div>
          <a href={Resume} target="_blank" className="btn-main-offer">Get Resume <img className='icon' src={Download} style={{width:"20px", height:"20px"}}/> </a>
          <Link class="btn btn-dark  mt-4 btns" to={"/about"} role="button">About me  <i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
        </div>
      </div>
    </Animated>
  )
}

export default Header