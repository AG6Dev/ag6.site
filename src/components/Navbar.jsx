import React from "react";
import icon from "../images/icon.png"

import "../styles/navbar.css"


export default function Navbar() {
    return (
        <nav>
            <img src={icon} className="navbar--icon" alt="AG6Dev Logo"/>
            <h1 className="nav-title">AG6Dev</h1>
            <h2 className="nav-about">About</h2>
            <a href="projects" className="nav-projects-a"><h2 className="nav-projects">Projects</h2></a>
            <h2 className="nav-contact">Contact Me</h2>
        </nav>
    )
}