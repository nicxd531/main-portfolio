import "../styles/Services.css"
import MainServices from "./MainServices";
const Services = () => {
    // main services component
    return ( 
        <section id="servicesNav" className="services grid">
            <div>
                <div>
                    <h1>services</h1>
                    <hr/>
                </div>
                <MainServices/>
            </div>
        </section>
     );
}
 
export default Services;