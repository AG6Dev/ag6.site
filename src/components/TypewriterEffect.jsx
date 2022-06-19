import React from "react";
import Typewriter from "typewriter-effect";

export default function TypewriterEffect(strings) {
    return (
        <Typewriter options={{
            strings: strings,
            autoStart: true,
            loop: true,
        }}/>
    )
}