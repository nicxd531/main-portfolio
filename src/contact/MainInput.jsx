import { RiUserLocationFill} from 'react-icons/ri'
import { BsFillTelephoneFill} from 'react-icons/bs'
import { SiGmail} from 'react-icons/si'
import { HiDownload} from 'react-icons/hi'
const MainInput = () => {
  // main contact input component
    return (
        <div className="main-input">
          <h3>message me</h3>
          <form name="contact" method="POST" netlify="true"  netlify-honeypot="bot-field" >
            <input 
            required
            name='name'
            type="text"
            placeholder="name"
            />
            <input 
            required
            name='email'
            type="text"
            placeholder="email"
            />
            <input 
            required
            name='subject'
            type="text"
            placeholder="subject"
            />
            <textarea
            required
            name='text area'
            placeholder="message"
            />
            <button type="submit">send message</button>
          </form>
          <div>
            <div>
              <h3>get in touch</h3>
              <hr/>
            </div>
            <p>I'm always open to new opportunities and collaborations. If you think we could work together, please don't hesitate to get in touch using the form on this page or by sending me an email</p>
            <div>
              <RiUserLocationFill size={16}/>
              <h3>lagos,nigeria</h3>
            </div>
            <div>
              <BsFillTelephoneFill size={16}/>
              <h3>+234 808 629 8113</h3>
            </div>
            <div>
              <SiGmail size={16}/>
              <h3>Finixd531@gmail.com</h3>
            </div>
            <div>
              <a href="/files/ola olasunkanmi resume.pdf" download>
                <HiDownload size={20}/>
                <h3>Download Resume</h3>
              </a>
            </div>
          </div>
        </div>
      );
}
 
export default MainInput;