import "../styles/Contact.css"
import MainInput from "./MainInput";
const Contact = () => {
    return ( 
        <div id="contactNav" className="contact">
            <div>
                <div className="contactHeader">
                    <h3>contact me</h3>
                    <hr/>
                </div>
                <MainInput/>
            </div>
            <h2>© Copyright nxGrfx. All Rights Reserved<br/>    
                Designed by nxGrfx</h2>
        </div>
     );
}
 
export default Contact;