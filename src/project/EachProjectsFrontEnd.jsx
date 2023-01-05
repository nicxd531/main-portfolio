import { FaGithub} from 'react-icons/fa'
import { FiLink2} from 'react-icons/fi'
import HoverDescription from './HoverDescripton'



const EachProjectFrontEnd  = ({projectSwitch}) => {
    const projectListFrontend=[
        {
            "title":"article blog for designers",
            "description":"blog website designed for designers to showcase their works and get comments on them from members of the blog",
            "link":"https://designer-web-articles.netlify.app/",
            "link2":"https://github.com/nicxd531/article-website--for-designers-",
            "image":"image/articleblog.jpg", 
        },
        {
            "title":"portfolio",
            "description":"portfolio website for ola olasunkanmi",
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