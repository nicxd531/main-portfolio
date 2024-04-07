import { useState, useEffect } from "react";
import ReactTypingEffect from 'react-typing-effect';

const Intro = () => {
    // home intro componenet
    // useState hook for taking in fetched greetings
    const [greeting, setGreeting] = useState('');
    // array list of skills which is then feed to react tytping effect for display 
    const list = [" Fullstack Software Developer", "Redux", "React", "Bootstrap", "Javascript", "Tailwind", "Html", "CSS", "Material UI 🧉", "Firebase 🔥", "Figma", "Framer Motion", "Next Js", "Typescript", "MongoDB", "Mongoose", "Node Js", "Express"]
    // useEffect hook for fetching the data and storing it in greetings and also reinvocking the fetchGreeting method 
    useEffect(() => {
        const fetchGreeting = async () => {
            try {
                const response = await fetch('https://www.greetingsapi.com/random');
                if (!response.ok) {
                    throw new Error('Failed to fetch greeting');
                }
                const data = await response.json();
                setGreeting(data.greeting);
            } catch (error) {
            }
        };
        // Fetch a new greeting every 10 seconds
        const intervalId = setInterval(() => {
            fetchGreeting();
        }, 10000);
    }
        , []);
    return (
        <div className="intro">
            <h3>
                🖐🏽
                <ReactTypingEffect
                    text={greeting ? greeting : "Hello"}
                    eraseSpeed={"20ms"}
                    typingDelay={"20ms"}
                />
                I'm
            </h3>
            <h1>
                ola olasunkanmi
            </h1>
            <h2>
                <ReactTypingEffect
                    text={list}
                    eraseSpeed={"10ms"}
                    typingDelay={"10ms"}
                    cursor={" "}
                />
            </h2>
        </div>
    );
}

export default Intro;