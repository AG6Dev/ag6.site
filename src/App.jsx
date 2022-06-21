import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";

export default function App() {
    return (
        <div>
            <Navbar/>
            <About/>
            <Projects/>
        </div>
    )
}