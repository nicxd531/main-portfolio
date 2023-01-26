import { FaGithub} from 'react-icons/fa'
import { FiLink2} from 'react-icons/fi'
import HoverDescription from './HoverDescripton'



const EachProjectFrontEnd  = ({projectSwitch}) => {
    const projectListFrontend=[
        {
            "title":"article blog for designers",
            "description":"This project is a professional blog website designed for designers to showcase their work and receive feedback from members of the community. Developed and designed by Ola Olasunkanmi, the site utilizes the React JavaScript library, various React frameworks, the AOS CSS animation library, and the Swiper JS library. The purpose of the website is to provide a platform for designers to share their creative talents and receive constructive criticism from other members of the design community.",
            "link":"https://designer-web-articles.netlify.app/",
            "link2":"https://github.com/nicxd531/article-website--for-designers-",
            "image":"image/articleblog.jpg", 
        },
        {
            "title":"portfolio",
            "description":"This is a professional portfolio website for Ola Olasunkanmi. It was constructed utilizing the React JavaScript library, the AOS animation library and various React extensions. The website serves as a digital showcase of Ola's skills and work experience, providing an easy to navigate and visually stunning platform for potential clients and employers to view Ola's portfolio. The utilization of the React JavaScript library, AOS animation library and other React extensions provides the website with a high level of functionality and interactivity.",
            "link":"https://designer-web-articles.netlify.app/",
            "link2":"https://github.com/nicxd531/main-portfolio/tree/main/",
            "image":"image/portfolio.jpg", 
        },
        "3",
        '4',
        "5",
        "6"
    ]
    
    
    const frontEndMap = projectListFrontend.map((data,index)=>{
        return(
            <div 
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="300" 
            key={index} className="project-section">
                <div >
                    <HoverDescription description={data.description} title={data.title} link={data.link}/>
                    <a  href={data.link}>
                        <img src={data.image} alt={data.title}/>
                    </a>
                </div>
                
                <div>
                    <a href={data.link2}><div><FaGithub size={24}/></div></a>
                    <a href={data.link}><div><FiLink2 size={24}/></div></a>
                </div>
            </div>
        )
    })
    return ( 
        <div className={`each-project-frontEnd grid ${ projectSwitch? "projectSwitchFalse" : "projectSwitchTrue"}`}>
            {frontEndMap}
        </div>
     );
}
 
export default EachProjectFrontEnd ;