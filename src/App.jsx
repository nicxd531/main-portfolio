import "./styles/main.css"
import{useRef,useState,useEffect} from "react"
import Home from "./home/Home"
import About from "./about/About"
import Skills from "./Skils/Skills"
import Services from "./services/Services"
import Projects from "./project/Projects"
import Contact from "./contact/Contact"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {
 const [theme, setTheme] = useState("light")
 useEffect(()=>{
  AOS.init(
     { duration: 600,
      easing: 'ease',
      once: false}
  );
})
  return (

        <main className={theme} >
          <div className="background flex">
            <Home theme={theme} setTheme={setTheme}/>
            <About/>
            <Skills theme={theme}/>
            <Services/>
            <Projects  theme={theme}/>
            <Contact />
          </div>
        </main> 
  )
}

export default App
