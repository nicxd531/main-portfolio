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
            <a>{themeIcon}</a>
            <a>{videoIcon}</a>
            <a><FaGithub className='icon-styles' size={30}/></a>
            <a><FaLinkedinIn className='icon-styles' size={30}/></a>
            <a><AiOutlineTwitter className='icon-styles' size={30}/></a>
            <a><FiInstagram className='icon-styles' size={30}/></a>
        </div>
     );
}
 
export default Socials;