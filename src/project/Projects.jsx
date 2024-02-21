import { Paper, Typography } from "@mui/material";
import HomeVideoBg from "../home/HomeVideoBg";
import "../styles/Projects.css"
import { useState } from "react";
import EachProjectFrontEnd from "./EachProjectsFrontEnd";

const Projects = ({theme}) => {
    // main project component
    return ( 
        <section id="projectNav" className="projects">
            <HomeVideoBg lightMode={"/video/light-mode-project-video.mp4"} darkMode={"/video/dark-mode-project-video.mp4"} theme={theme}/>
            <h1 className="project-logo">project's</h1>
            <div className="project-content" style={{width:"100%"}}>
                <Paper sx={{width:"80%",margin:"auto",height:{xs:"987",lg:"95%"},p:2,boxSizing:"border-box",mt:3}}>
                <div className="introd">
                     <h1>SOFTWARE DEVELOPMENT</h1>
                    <hr/>
                    <Typography sx={{fontSize:{xs:"0.75rem",lg:"1rem"}}}>this section contains projects developed with diffrent stack with their explanation and aso indicating their usage and benefits</Typography>
                </div>
                <div> 
                     <EachProjectFrontEnd/>
                </div>
                </Paper>
            </div>
        </section>
     );
}
export default Projects;