import { useState } from "react"
const MainServices = () => {
    // main services component 
    const [hover, sethover] = useState(1)
    const services = [
        {
            image: "image/programming.png",
            title: "SOFTWARE DEVELOPMENT",
            desc: "Software development is the systematic process of designing, coding, testing, and maintaining software systems to meet specific objectives or requirements. It involves a structured approach to creating computer programs or applications, encompassing various stages such as analysis, design, implementation, testing, and maintenance"
        },
        {
            image: "image/app-development.png",
            title: "WEB DEVELOPMENT",
            desc: "creation of visible parts of a website and application using web languages such as javascript ,html and css with the use of knowledge on javascript liabries such as react.js and next.js."
        },
        {
            image: "image/art.png",
            title: "UI/UX BASICS ",
            desc: "UI/UX basics refer to the fundamental principles of User Interface (UI) design, focusing on the visual elements and aesthetics, and User Experience (UX) design, emphasizing a user-centric approach to create digital products that are visually appealing, intuitive, and provide a positive overall experience. "
        }
    ]
    const requiresDAta =
        services.map((data, index) => {
            return (
                <div
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    onMouseEnter={() => sethover(index)} key={index} className={`each-services ${index === hover ? "hovered" : "notHoverd"}`}>
                    <div>
                        <img src={data.image} alt="services-image" />
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