import React from 'react'
import Timeline from './Timeline'
import { Link } from 'react-router-dom'
import Animated from '../Animated'
import Goal from "../goal.gif"

function Achievement() {
    let details=
    [
        {
            month:"",
            image:true,
            year:"2014",
            title:"Awards",
            description:" Got selected in both district and state level project competition and won INSPIRE AWARD from the government.",
        },
        {
            month:"2019",
            year:"-2021",
            title:"Service Advisor( Hyundai Motor Plaza & Toyota)",
            description:"Got Employee of the month Award for Appreciating my Customer Handling skills."
        },
        {
            month:"2 years",
            year:"2013",
            title:"visual Art & design",
            description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie."
        }
    ]
    return (
        <>
        <Animated>
            <div className="top"><h4 className="text-center mt-4 fs-1"><img className="size-2" src={Goal}/>Acheivements</h4></div>
            <div class="container achieve">
            <div className="page"><Link className="btn btn-dark rounded-circle ml-4" to={"/skill"}><i class="fa fa-arrow-left" aria-hidden="true"></i></Link></div>
                <div class="main-timeline">
                    {
                        details.map((list)=>{
                            return <Timeline list={list}/>
                        })
                    }
                </div>
                <div className="page"><Link className="btn btn-dark rounded-circle ml-4" to={"/contact"}><i class="fa fa-arrow-right" aria-hidden="true"></i></Link></div>
            </div>
            </Animated>
        </>
    )
}

export default Achievement