import "../styles/about.css"
import AboutImg from "./Aboutimg";
import AboutInfo from "./AboutInfo";
import WhoAmI from "./WhoAmI";

const About = () => {
    return ( 
        <section className="about" id="Aboutnav">
            <div>
                <div>
                    <h1>about me</h1>
                    <hr/>  
                </div>
                <AboutImg/>
                <AboutInfo/>
                <WhoAmI/>
            </div>

        </section>
     );
}
 
export default About;