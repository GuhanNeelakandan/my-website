import React from 'react'
import Award from "../inspire.PNG"


function Timeline(props) {
    return (
        <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
                <div class="date-outer">
                    <span class="date">
                        <span class="month">{props.list.month}</span>
                        <span class="year">{props.list.year}</span>
                    </span>
                </div>
            </div>
            <div class="timeline-content">
                <h5 class="title">{props.list.title}</h5>
                <div className="d-flex">{props.list.image ? <img className="size" src={Award}/> :""} 
                <p class="ms-4 description">
                    {props.list.description}
                </p>
                </div>
            </div>
        </div>
    )
}

export default Timeline