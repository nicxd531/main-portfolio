import { FiInstagram } from 'react-icons/fi'
import { BsFillPlayFill } from 'react-icons/bs'
import { MdLightMode, MdOutlineNightlightRound } from 'react-icons/md'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineTwitter, AiOutlinePause } from 'react-icons/ai'
import { useState } from 'react'
const Socials = ({ theme, setTheme }) => {
    // main component for socails 
    const [playVid, setplayVid] = useState(false)
    // var for holding video element and methods for pause and play 
    const videoElement = document.querySelector('video')
    const pause = () => {
        videoElement.pause()
    }
    const play = () => {
        videoElement.play()
    }
    const themeIcon = theme == "light" ? <MdOutlineNightlightRound
        size={34}
        onClick={() => setTheme("dark")}
    /> : <MdLightMode
        size={34}
        onClick={() => setTheme("light")}
    />
    const videoIcon = playVid ? <BsFillPlayFill onClick={() => { setplayVid(false), play() }} size={34} /> : <AiOutlinePause onClick={() => { setplayVid(true), pause() }} size={34} />
    return (
        <div className='socials' style={{ "display": "flex", "flexDirection": "column" }}>
            <a>{themeIcon}</a>
            <a>{videoIcon}</a>
            <a
                href='http://github.com/nicxd531'
            ><FaGithub className='icon-styles' size={30} /></a>
            <a href='https://www.linkedin.com/in/ola-olasunkanmi/'
            ><FaLinkedinIn className='icon-styles' size={30} /></a>
            <a href='https://twitter.com/nicx_ola_'
            ><AiOutlineTwitter className='icon-styles' size={30} /></a>
            <a href='https://www.instagram.com/nicx_ola/'
            ><FiInstagram className='icon-styles' size={30} /></a>
        </div>
    );
}

export default Socials;