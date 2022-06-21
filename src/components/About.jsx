import React from "react";
import icon from "../images/icon.png";

import "../styles/about.css";
import Typewriter from "typewriter-effect";

export default function About() {
    return (
        <section className="about">
                <div className="about-image">
                    <img src={icon} alt="AG6 Logo"/>
                </div>
                <div className="about-info">
                    <h1>Hello! 👋</h1>

                    <span className="about-info-intro">I'm AG6, a 16 year old ‎ <Typewriter options={{
                        strings: ["Java Developer",
                            "Python Developer",
                            "Minecraft Modder"],
                        autoStart: true,
                        loop: true,
                        typeSpeed: 300,

                    }} className="about-typewriter"/>
                from the UK.</span>
                </div>
        </section>
    )
}