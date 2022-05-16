import React from 'react'
import Neosmile from "../Neosmile.jpg"
import ProjectCard from './ProjectCard'
import NeoMangement from "../NeoMangement.png"
import { Link } from 'react-router-dom'
import Animated from '../Animated'

function Project() {
    let projectList = [
        {
            image: Neosmile,
            title: "Dental Clinic Website",
            description: "The new website is created for the client",
            gitLink: "https://github.com/GuhanNeelakandan/Dental_website",
            webLink: "https://neosmiledentalomr.netlify.app/",
            tools: "React,React-Hook",
        },
        {
            image: NeoMangement,
            title: "Dental Clinic Mangement",
            description: "Clini Management is created.CRUD Application to store patients Data everything at one place",
            gitLink: "https://github.com/GuhanNeelakandan/Noesmile-Mangement-frontend",
            webLink: "https://neosmile-management.netlify.app/",
            weblink2: "https://github.com/GuhanNeelakandan/Neosmile-Management-Backend",
            tools: "MongoDB,Express,React,Nodejs-(MERN)",
            backend: true
        },
    ]
    return (
        <Animated>
            <div className="top">
                <h4 className="text-center mt-4 fs-1">Project</h4>
            </div>
            <div className="container project">
                <div className="next-page">
                    <Link className="btn btn-dark rounded-circle ml-4" to={"/skill"}><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
                    <div className="row">
                        {
                            projectList.map((card) => {
                                return <ProjectCard card={card} />
                            })
                        }
                    </div>
                    <Link className="btn btn-dark rounded-circle ml-4" to={"/achieve"}><i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </div>

            </div>
        </Animated>

    )
}

export default Project