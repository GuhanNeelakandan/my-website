import React from 'react'
import me from "../me.png"
import Animated from "../Animated";
import { Link } from 'react-router-dom';

function About() {
    return (
        <>
            <Animated>
                <div className="container about">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 image">
                            <img className="img-fluid rounded float-center img" src={me} alt="profile pic"
                                style={{ width: "60%", margin: "20px 20px" }} />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 aboutMe">
                            Hello, I am a highly motivated and skilled engineering graduate looking for an entry-level position as a software engineer. Strong in design and integration with intuitive problem-solving skills. Proficient in JAVASCRIPT,CSS,BOOTSTRAP,REACT and SQL etc.,. Passionate to contribute ideas and learn new things. I am available for any kind of job opportunity that suits my interests.
                            <div>
                                <Link class="btn btn-dark mt-4 btn-s" to={"/contact"} role="button">Contact Me <i class="fa fa-bell" aria-hidden="true"></i>
                                </Link>
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