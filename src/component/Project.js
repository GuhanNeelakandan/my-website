import React from 'react'
import smilechat from "../smilechat.png"
import ProjectCard from './ProjectCard'
import NeoMangement from "../NeoManagement.png"
import hotelbooking from "../hotelbooking.png"
import Einstro from "../einstro.png"
import EinstroAdmin from "../einstroAdmin.png"
import NeosmileOmr from "../neosmileOMR.png"
import videochat from "../videoChat.png"
import Todo from "../Todolist.png"
import { Link } from 'react-router-dom'
import Animated from '../Animated'
import neosmile from "../neosmile.png"

function Project() {
    let realProject =[
        {
            image: Einstro,
            title: "Einstro Study Abroad",
            description: "A dynamic web application built with React and Bootstrap, designed to help students explore and apply for study abroad programs. The site features a responsive, user-friendly interface with a course finder tool and smooth navigation, offering a seamless experience across devices.",
            webLink: "https://einstrostudyabroad.com/",
            backend: false
        },
        {
            image: EinstroAdmin,
            title: "Einstro Study Abroad - Admin",
            description: "An admin dashboard built with React and Bootstrap, providing administrators with a streamlined interface to manage study abroad programs, applications, and student data. The responsive design ensures efficient access and control across various devices.",
            webLink: "https://einstrostudyabroad.com/admin/",
            backend: false
        },
        {
            image: NeosmileOmr,
            title: "Neosmile Dental OMR",
            description: "A modern website built with React and Bootstrap, designed to showcase Neosmile Dental’s services, team, and patient care. The site is fully responsive, offering a user-friendly experience on all devices, with smooth navigation and informative content about treatments like Invisalign and Root Canal Therapy.",
            webLink: "https://neosmiledentalomr.in/",
            backend: false
        },
    ]
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
        <h2 className="text-center py-3">Real Project</h2>
          <div className="row">
            {realProject.map((card) => {
              return <ProjectCard card={card} />;
            })}
          </div>
          <hr></hr>
          <h2 className="text-center">Demo Project</h2>
          <div className="text-center">
            Creditials:
            <div>Username / Email : test / test@gmail.com</div>
            <div>Password: 12345678</div>
          </div>
          <div className="next-page">
            <Link className="btn btn-dark rounded-circle ml-4" to={"/skill"}>
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </Link>
            <div className="row mt-5">
              {projectList.map((card) => {
                return <ProjectCard card={card} />;
              })}
            </div>
            <Link className="btn btn-dark rounded-circle ml-4" to={"/achieve"}>
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </Animated>
    );
}

export default Project