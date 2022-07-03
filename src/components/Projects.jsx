import React from "react";
import ProjectEntry from "./ProjectEntry";
import react_icon from "../images/react-icon.svg";
import annotation_icon from "../images/email-annotation-icon.png";

import "../styles/projects.css";

export default function Projects() {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a id="projects">
            <section className="projects">
                <span className="projects-title">Projects</span>
                <div className="projects-div">
                    <ProjectEntry title="AG6.site" description="The site you're currently on! Currently a work in progress but slowly getting there." language="JavaScript + CSS" image={react_icon} github={"https://github.com/AG6Dev/ag6.site/tree/master"}/>
                    <ProjectEntry title="Annotation Generation" description="An easy way to generate data files using annotations while modding." language="Java" image={annotation_icon} github={"https://github.com/AG6Dev/AnnotationGeneration"} docs_link="annotationgen"/>
                </div>
            </section>
        </a>
    )
}