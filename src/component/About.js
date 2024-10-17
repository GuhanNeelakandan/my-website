import React from 'react'
import me from "../profile.jpg"
import Animated from "../Animated";
import { Link } from 'react-router-dom';
import Call from "../call.gif"

function About() {
    return (
        <>
            <Animated>
                <div className="container about">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 image">
                            <img className="img" src={me} alt="profile pic"
                               />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 aboutMe">
                            <p> <h1 className="text-center text-inline">About</h1></p>
                            <p className="words">
                            I am a dedicated and results-driven Full-Stack Developer with 2.4 years of hands-on experience in the MERN stack (MongoDB, Express.js, React, Node.js). I excel at designing and developing robust, scalable web applications, focusing on delivering seamless user experiences. My expertise spans both front-end and back-end development, from creating responsive, visually appealing interfaces to implementing efficient server-side logic and databases. I am committed to writing clean, maintainable code and continuously improving my skills to stay at the forefront of technology. With a passion for problem-solving and innovation, I take pride in bringing creative ideas to life while ensuring high performance and security in every project.</p>
                            
                            <div>
                                <Link class="btn btn-dark mt-4 btn-s" to={"/contact"} role="button">Contact Me <img src={Call} style={{width:"20px", height:"20px"}}/> </Link>
                            </div>
                            <div className="d-flex justify-content-between">
                            <Link class="btn btn-dark rounded-circle mt-4 btn-s" to={"/"} role="button"><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
                                <Link class="btn btn-dark rounded-circle mt-4 btn-s" to={"/skill"} role="button"><i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Animated>
        </>
    )
}

export default About