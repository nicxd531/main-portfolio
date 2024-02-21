import "../styles/about.css"
import AboutImg from "./Aboutimg";
import AboutInfo from "./AboutInfo";
import WhoAmI from "./WhoAmI";

const About = () => {
    // main about component
    return ( 
        <section className="about" id="Aboutnav">
            <div>
                <div>
                    <h1>about me</h1>
                    <hr/>  
                </div>
                <AboutImg/>
                <AboutInfo
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                />
                <WhoAmI
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                />
            </div>

        </section>
     );
}
 
export default About;