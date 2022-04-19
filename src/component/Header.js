import React from 'react';
import { Link } from 'react-router-dom';
import Type from "react-typed"
import Animated from '../Animated';

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
          <a href="https://drive.google.com/drive/u/0/folders/1YcnKyaEpupF1ITDWrT9hv5DaY6aKT10b" target="_blank" className="btn-main-offer">Get Resume <i class="fa fa-chevron-down" aria-hidden="true"></i></a>
          <Link class="btn btn-dark rounded-circle mt-4 btns" to={"/about"} role="button"><i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
        </div>
      </div>
    </Animated>
  )
}

export default Header