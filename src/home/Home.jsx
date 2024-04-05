import "../styles/Home.css"
import HomeVideoBg from "./HomeVideoBg";
import Intro from "./Intro";
import NavBar from "./NavBar";
import Socials from "./socails";
import { FaAngleUp } from 'react-icons/fa'
import { useState, useEffect } from "react";

const Home = ({ theme, setTheme }) => {
    // main home component
    // state and on scroll function
    const [showTopBtn, setShowTopBtn] = useState(false)
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false)
            }
        })


    }, [])


    return (
        <section className={`Home grid ${theme}`}>
            <NavBar onScroll={showTopBtn} />
            <HomeVideoBg lightMode={"/video/light-mode-home-video.mp4"} darkMode={"/video/dark-mode-home-video.mp4"} theme={theme} />
            <Intro />
            <Socials theme={theme} setTheme={setTheme} />
            <div className="scroll-down">
                <h3>scroll down</h3>
                <hr />
            </div>
            {showTopBtn &&
                <div className="scroll-to-top">
                    <FaAngleUp size={28} onClick={goToTop} />

                </div>}
        </section >
    );
}

export default Home;