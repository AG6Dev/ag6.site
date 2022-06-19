import React from "react";
import icon from "../images/icon.png";
import Typewriter from "typewriter-effect";

import "../styles/about.css";

export default function About() {
    return (
        <div className="about">
            <img src={icon} alt="AG6"/>
            <h1>Hello!</h1>

            <Typewriter options={{
                strings: ["Java Developer",
                    "Python Developer",
                    "Backend Developer",
                    "Web Developer"],
                autoStart: true,
                loop: true,

            }} className="about-typewriter"/>
        </div>
    )
}