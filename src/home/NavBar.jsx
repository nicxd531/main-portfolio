import {Twirl as Hamburger} from "hamburger-react"
import { useState } from "react";
const NavBar = ({onScroll}) => {
    // navbar main component
    const [isOpen, setOpen] = useState(false)
    return ( 
        <section style={{zIndex:1200}} className={`navBar ${isOpen?"nav-firstchild-open" : "nav-firstchild-close"} ${onScroll?"nav-firstchild-open" : null}`} >
            <div>
            <h1>portfolio</h1>
            <Hamburger toggled={isOpen} toggle={setOpen}/>
            </div>
            <div className={`menu ${isOpen?"menuOpen" : "menuClose"}`}>
                <a href="#">home</a>
                <a href="#Aboutnav">about</a>
                <a href="#skillsNav">skills</a>
                <a href="#servicesNav">services</a>
                <a href="#projectNav">projects</a>
                <a href="#contactNav">contact</a>
                <a href="https://olaolasunkanmi.hashnode.dev/">blog</a>
            </div>
        </section>
     );
}
 
export default NavBar;