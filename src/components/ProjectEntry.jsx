import React from "react";
import "../styles/project-entry.css";
import github_icon from "../images/github-icon.svg"

export default function ProjectEntry(props) {
    return (
        <div className="project-entry">
            <section>
                <img className="project-entry-image" src={props.image} alt={props.title}/>
                <h1>{props.title}</h1>
                <h3>{props.language}</h3>
                <p>{props.description}</p>
                <a href={props.github} className="project-github-button" target="_blank" rel="noopener noreferrer">
                    <img className="project-github-logo" src={github_icon} alt={"Go to project GitHub"} />
                    GitHub
                </a>
            </section>
        </div>
    )
}