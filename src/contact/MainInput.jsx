import { RiUserLocationFill} from 'react-icons/ri'
import { BsFillTelephoneFill} from 'react-icons/bs'
import { SiGmail} from 'react-icons/si'
import { HiDownload} from 'react-icons/hi'
const MainInput = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };
  
  document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);
  

    return (
        <div className="main-input">
          <h3>message me</h3>
          <form 
          data-netlify="true"
          name="contact"
          method="post"
          onSubmit={handleSubmit}
          >
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