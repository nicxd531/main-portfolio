import { FaGithub} from 'react-icons/fa'
import { FiLink2} from 'react-icons/fi'

const EachProjectsWebDesign = ({projectSwitch}) => {
    const projectListWebDesign=[
        {
            "title":"desktop article website ",
            "description":"This is a professional desktop website that serves as an initial release, with planned updates to come. It was developed using the React JavaScript library, the Bootstrap CSS library, and various CSS animation techniques. This website is a representation of the developer's first work and showcases their skills in utilizing these technologies. The use of React, Bootstrap and CSS animation libraries provide the website with a high level of functionality and visual appeal. The website is designed to be user-friendly and easy to navigate. The developer is committed to continuing to improve and update the website in the future to enhance the user experience.",
            "link":"https://article-website-for-desktop.netlify.app/",
            "link2":"https://github.com/nicxd531/blitz_webpage_for_desktop/",
            "image":"image/article website  for desktop.jpg", 
        },
        "2",
        "3",
        '4',
        "5",
        "6"
    ]
    const webDesignMap= projectListWebDesign.map((data,index)=>{
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
        <div className={`each-project-webDesign grid  ${ projectSwitch?"projectSwitchTrue" : "projectSwitchFalse"}`}>
            {webDesignMap}
        </div>
     );
}
 
export default EachProjectsWebDesign ;