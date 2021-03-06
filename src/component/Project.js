import React from 'react'
import smilechat from "../smilechat.png"
import ProjectCard from './ProjectCard'
import NeoMangement from "../NeoManagement.png"
import hotelbooking from "../hotelbooking.png"
import videochat from "../videoChat.png"
import Todo from "../Todolist.png"
import { Link } from 'react-router-dom'
import Animated from '../Animated'
import neosmile from "../neosmile.png"

function Project() {
    let projectList = [
        {
            image: hotelbooking,
            title: "HotelBooking",
            description: "Hotel booking application with admin control using MERN",
            frontEnd: "https://github.com/GuhanNeelakandan/HotelBooking_FrontEnd",
            webLink: "https://hotelbooking-app.netlify.app/",
            backEnd: "https://github.com/GuhanNeelakandan/HotelBooking_Backend",
            backend: true
        },
        {
            image: smilechat,
            title: "Smile-Chat",
            description: "Chatting app using MERN and socket",
            frontEnd: "https://github.com/GuhanNeelakandan/SmileChat_frontEnd",
            backEnd: "https://github.com/GuhanNeelakandan/SmileChat_BackEnd",
            webLink: "https://smilechat-mern-app.netlify.app/",
            backend:true
        },
        {
            image: videochat,
            title: "Video Chat",
            description: "Video Chat application using MERN and socket",
            frontEnd: "https://github.com/GuhanNeelakandan/ClubHouse_FrontEnd",
            webLink: "https://clubhouse-clone-app.netlify.app/",
            backEnd: "https://github.com/GuhanNeelakandan/Clubhouse_backend",
            backend: true
        },
        {
            image: Todo,
            title: "Docket App",
            description: "Just Anothoer Interactive,Nice beautiful and small to-do application (MERN),Does Everything",
            frontEnd: "https://github.com/GuhanNeelakandan/Todo_frontend",
            webLink: "https://todo-createdby-guhan.netlify.app/",
            backEnd: "https://github.com/GuhanNeelakandan/Todo_backend",
            backend: true
        },
        {
            image: NeoMangement,
            title: "Dental Clinic Mangement (MERN)",
            description: "Clini Management Application to store patients Data everything at one place.",
            frontEnd: "https://github.com/GuhanNeelakandan/Noesmile-Mangement-frontend",
            webLink: "https://neosmile-management.netlify.app/",
            backEnd: "https://github.com/GuhanNeelakandan/Neosmile-Management-Backend",
            backend: true
        },
        {
            image: neosmile,
            title: "Clinic Website",
            description: "Website for Newly opened Clinic.",
            frontEnd: "https://github.com/GuhanNeelakandan/Dental_website",
            webLink: "https://neosmiledentalomr.netlify.app/",
            backend: false
        },
    ]
    return (
        <Animated>
            <div className="top">
                <h4 className="text-center mt-4 fs-1">Project</h4>
            </div>
            <div className="container project">
                <div className='text-center'>
                    Creditials:
                    <div>Username / Email : test / test@gmail.com</div>
                    <div>Password: 12345678</div>
                </div>
                <div className="next-page">
                    <Link className="btn btn-dark rounded-circle ml-4" to={"/skill"}><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
                    <div className="row mt-5">
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