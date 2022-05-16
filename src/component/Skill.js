import React from 'react'
import html from "../html.png"
import css from "../css.png"
import bootstrap from "../bootstrap.png"
import javascript from "../js.png"
import code from "../coding.png"
import github from "../github.png"
import python from "../python.png"
import photoshop from "../photoshop.png"
import skill from "../settings.gif"
import sql from "../sql.png"
import mongo from "../mongo.png"
import react from "../react.png"
import Animated from '../Animated'
import { Link } from 'react-router-dom'

function Skill() {
  return (
    <Animated>
      <div className="container heading">
        <div className="main-skill">
          <h1 className="text-center"><img className="size-2" src={skill} />Skill</h1>

          <p className="text-left m-4 bg-dark bg-transparent">
            I am a full stack web developer having experience of building web applications with (JavaScript/ ReactJs / Nodejs ).These include specific technical skills that I have developed by designing my own websites.I also have excellent written and verbal communication skills along with great leadership quality.
          </p>
        </div>
        <div className='skills-1'>
        <div className="d-flex justify-content-between">
            <Link class="btn btn-dark rounded-circle mt-4" to={"/about"} role="button"><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
            <img className="skills" src={code} />
            <Link class="btn btn-dark rounded-circle mt-4" to={"/project"} role="button"><i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
          </div>
          
        </div>
        <div className="skills">
          <h3 className="text-center sub">Technical</h3>
          <h5 className="mini">I have become confident using following technologies</h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 m-4 ">
            <h5 className="text-center mb-3">Web</h5>
            <div className="animea justify-content-space-around">
              <img className="size" src={html} />
              <img className="size" src={css} />
              <img className="size" src={bootstrap} />
              <img className="size" src={react} />
              <img className="size" src={sql} />
              <img className="size" src={mongo} />
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4  m-4 pro">
            <h5 className="text-center mb-3">Programming</h5>
            <div className="animea">
              <img className="size" src={javascript} />
              <img className="size" src={python} />
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4  m-4">
            <h5 className="text-center mb-3">Tools</h5>
            <div className="animea">
              <img className="size" src={github} />
              <img className="size" src={photoshop} />
            </div>
          </div>
        </div>
      </div>
    </Animated>
  )
}

export default Skill