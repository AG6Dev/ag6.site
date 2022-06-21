import React from "react";
import ProjectEntry from "./ProjectEntry";
import react_icon from "../images/react-icon.svg";

import "../styles/projects.css";

export default function Projects() {
    return (
        <a id="projects">
            <section className="projects">
                <span className="projects-title">Projects</span>
                <div className="projects-div">
                    <ProjectEntry title="AG6.site" description="The site you're currently on! Currently a work in progress but slowly getting there." language="JavaScript + CSS" image={react_icon} github={"https://github.com/AG6Dev/ag6.site/master"}/>
                </div>
            </section>
        </a>
    )
}