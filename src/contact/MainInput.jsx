import { RiUserLocationFill} from 'react-icons/ri'
import { BsFillTelephoneFill} from 'react-icons/bs'
import { SiGmail} from 'react-icons/si'
import { HiDownload} from 'react-icons/hi'
const MainInput = () => {

    return (
        <div className="main-input">
          <h3>message me</h3>
          <form>
            <input 
            type="text"
            placeholder="name"
            />
            <input 
            type="text"
            placeholder="email"
            />
            <input 
            type="text"
            placeholder="subject"
            />
            <textarea
            placeholder="message"
            />
            <button>send message</button>
          </form>
          <div>
            <div>
              <h3>get in touch</h3>
              <hr/>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Dignissimos harum corporis fuga corrupti. 
            Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
            <div>
              <RiUserLocationFill size={16}/>
              <h3>lago,nigeria</h3>
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
              <a href="/files/h.pdf" download>
                <HiDownload size={16}/>
                <h3>Download Resume</h3>
              </a>
            </div>
          </div>
        </div>
      );
}
 
export default MainInput;