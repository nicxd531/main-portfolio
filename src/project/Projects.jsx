import HomeVideoBg from "../home/HomeVideoBg";
import "../styles/Projects.css"
import EachProjectFrontEnd from "./EachProjectsFrontEnd";
import EachProjectsWebDesign from "./EachProjectsWebDesign";
import { useState } from "react";

const Projects = ({theme}) => {
    const [ projectSwitch, setProjectSwitch] = useState(false)
    
    return ( 
        <section id="projectNav" className="projects">
            <HomeVideoBg lightMode={"/video/light-mode-project-video.mp4"} darkMode={"/video/dark-mode-project-video.mp4"} theme={theme}/>
            <div className="project-content">
                <div>
                    { projectSwitch ? <h1>Web design's</h1> : <h1>frontend</h1>}
                    <hr/>
                </div>
                <div>
                    <h1>portfolio's</h1>
                    <div className="each-projects">
                        <EachProjectFrontEnd  projectSwitch={projectSwitch} />
                        <EachProjectsWebDesign  projectSwitch={projectSwitch}/>
                        <div className="circled-dots-project">
                            <div>
                                <div onClick={()=>setProjectSwitch(false)} className={`${projectSwitch ?"project-dot-false" :"project-dot-true"}`}></div>
                                <div onClick={()=>setProjectSwitch(true)} className={`${projectSwitch ? "project-dot-true" : "project-dot-false"}`}></div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </section>
     );
}
 
export default Projects;