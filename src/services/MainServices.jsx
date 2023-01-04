import { useState } from "react"
const MainServices = () => {
    const [hover, sethover] = useState(1)
    const services=[
        {
            image:"image/programming.png",
            title:"web development",
            desc:"creation of visible parts of a website and application using web languages such as javascript ,html and css with the use of knowledge on javascript liabries such as react and jquery."
        },
        {
            image:"image/app-development.png",
            title:"RESPONSIVE DESIGN",
            desc:"creation of web designs and application designs that can adapt to any reading device used by a useer ,with the use of html and css to make it presentable based on the device size."
        },
        {
            image:"image/art.png",
            title:"GRAPHIC DESIGN",
            desc:"basic knoweledge in graphic design and also knowledge in the use of apps such as adobe photoshop ,adobe illustrator and figma used in creating amazing user interface."
        }
    ]
     const requiresDAta =
     services.map((data, index)=>{
         return(
             <div 
             data-aos="zoom-in"
             data-aos-duration="3000"
             onMouseEnter={()=>sethover(index)}  key={index} className={`each-services ${index=== hover? "hovered":"notHoverd"}`}>
                 <div>
                     <img src={data.image} alt="services-image"/>
                 </div>
                 <h1>{data.title}</h1>
                 <p>{data.desc}</p>
             </div>
         )
     })
    return ( 
        <div className="main-services">
            {requiresDAta}
        </div>
     );
}
 
export default MainServices;