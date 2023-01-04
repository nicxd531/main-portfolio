import {FiInstagram} from 'react-icons/fi'
import {BsFillPlayFill} from 'react-icons/bs'
import {MdLightMode,MdOutlineNightlightRound} from 'react-icons/md'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {AiOutlineTwitter, AiOutlinePause} from 'react-icons/ai'
import { useState } from 'react'
const Socials = ({theme, setTheme}) => {
    const [playVid, setplayVid] = useState(false)
   const videoElement = document.querySelector('video')
   const pause =()=>{
    videoElement.pause()
   }
   const play =()=>{
    videoElement.play()
   }
   const themeIcon= theme=="light"?<MdOutlineNightlightRound 
    size={34}
    onClick={()=>setTheme( "dark")}
    />:<MdLightMode 
    size={34}
    onClick={()=>setTheme( "light")}
    />
    const videoIcon= playVid ? <BsFillPlayFill onClick={()=>{setplayVid(false),play()}} size={34}/> :<AiOutlinePause onClick={()=>{setplayVid(true), pause()}} size={34}/>

    
    return ( 
        <div className='socials'>
            <a
            data-aos="fade-up"
            data-aos-duration="3000"
            >{themeIcon}</a>
            <a
            data-aos="fade-up"
            data-aos-duration="3000"
            >{videoIcon}</a>
            <a
            data-aos="fade-up"
            data-aos-duration="3000"
            ><FaGithub className='icon-styles' size={30}/></a>
            <a
            data-aos="fade-up"
            data-aos-duration="3000"
            ><FaLinkedinIn className='icon-styles' size={30}/></a>
            <a
            data-aos="fade-up"
            data-aos-duration="3000"
            ><AiOutlineTwitter className='icon-styles' size={30}/></a>
            <a
            data-aos="fade-up"
     data-aos-duration="3000"
            ><FiInstagram className='icon-styles' size={30}/></a>
        </div>
     );
}
 
export default Socials;