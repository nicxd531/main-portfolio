import HomeVideoBg from "../home/HomeVideoBg";
import "../styles/skills.css"
import SkillsAndExperience from "./SkillsAndExperience";
import SkillsEducationBackground from "./SkillsEducationBackground";
import { useState } from "react";
import SkillTags from "./SkillsTags";

const Skills = ({theme}) => {
  // main skills component
  // states for toggling 
  const [toggle, setToggle] = useState(false)
  const intro=toggle ?
    <SkillsAndExperience/>:
    <SkillsEducationBackground/>

    return (
        <section className="skills" id="skillsNav">
          <HomeVideoBg lightMode={"/video/light-mode-skills-video.mp4"} darkMode={"/video/dark-mode-skills-video.mp4"} theme={theme}/>
          <div>
            {intro}
            <div className="circled-dots-skills">
              <div>
                <div onClick={()=>setToggle(false)} className={`${toggle  ?"skills-dot-false" :"skills-dot"}`}></div>
                <div onClick={()=>setToggle(true)} className={`${toggle ? "skills-dot" : "skills-dot-false"}`}></div>
              </div>
            </div>
            <SkillTags/>
          </div>
        </section>
      );
}
 
export default Skills;