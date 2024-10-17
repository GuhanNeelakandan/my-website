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
import node from "../nodejs.png"
import SkillCard from './SkillCard'
import express from "../express.png"
function Skill() {
    let skillList=[
      {
        image: html,
        title: "HTML",
        bar:"html",
        percentage:"95%"
      },
      {
        image: css,
        title: "CSS",
        bar:"css",
        percentage:"95%"
      },
      {
        image: javascript,
        title: "JavaScript",
        bar:"javascript",
        percentage:"75%"
      },
      {
        image: bootstrap,
        title: "Bootstrap",
        bar:"bootstrap",
        percentage:"95%"
      },
      {
        image: react,
        title: "React",
        bar:"react",
        percentage:"95%"
      },
      {
        image: node,
        title: "NodeJs",
        bar:"node",
        percentage:"95%"
      },
      {
        image: express,
        title: "Express",
        bar:"node",
        percentage:"80%"
      },
      {
        image: mongo,
        title: "MongoDb",
        bar:"mongodb",
        percentage:"80%"
      },
      {
        image: sql,
        title: "MySQL",
        bar:"sql",
        percentage:"65%"
      },
      {
        image: github,
        title: "GitHub",
        bar:"github",
        percentage:"75%"
      },
      {
        image: photoshop,
        title: "Photoshop",
        bar:"photshop",
        percentage:"65%"
      },
      
    ]
  return (
    <Animated>
      <div className="container heading">
        <div className="main-skill">
          <h1 className="text-center"><img className="size-2" src={skill} />Skill</h1>
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
          <h5>I have become confident using following technologies</h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 m-4 skill-content">
            <div className='row skill-set'>
              {
                skillList.map((list)=>{
                  return <SkillCard list={list}/>
                })
              }
              {/* <div className='animea justify-content-space-evenly col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
                <img className="size" src={css} />
                <p className='skill-name'>CSS</p>
              </div>
              <div className='animea justify-content-space-evenly col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
                <img className="size" src={bootstrap} />
                <p className='skill-name'>Bootstrap</p>
              </div>
              <div className='animea justify-content-space-evenly col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
                <img className="size" src={javascript} />
                <p className='skill-name'>JavaScript</p>
              </div>
              <div className='animea justify-content-space-evenly col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
                <img className="size" src={react} />
                <p className='skill-name'>React</p>
              </div>
              <div className='animea justify-content-space-evenly col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
                <img className="size" src={node} />
                <p className='skill-name'>nodejs</p>
              </div>
              <div className='animea justify-content-space-evenly col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
                <img className="size" src={mongo} />
                <p className='skill-name'>MongoDB</p>
              </div>
              <div className='animea justify-content-space-evenly col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
                <img className="size" src={github} />
                <p className='skill-name'>GitHub</p>
              </div>
              <div className='animea justify-content-space-evenly col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
                <img className="size" src={photoshop} />
                <p className='skill-name'>Photshop</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Animated>
  )
}

export default Skill