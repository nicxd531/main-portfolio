import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { useState } from "react";


const TopLanguages = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)
    const list =[
        {
            "image":"image/html.png",
            "title":"HTML",
            "description":"HTML (HyperText Markup Language) is a markup language used to structure content on the web. It consists of a series of elements, or tags, which are used to describe the content and layout of a webpage."

        },
        {
            "image":"image/javascript.png",
            "title":"JAVASCRIPT",
            "description":"JavaScript is used to add interactivity to websites by allowing the webpage to respond to user actions such as clicks, scrolls, and form input. It can also be used to manipulate the HTML and CSS on a webpage, making it an essential tool for web developers."

        },
        {
            "image":"image/css.png",
            "title":"CSS",
            "description":"CSS (Cascading Style Sheets) is a stylesheet language used to describe the appearance and layout of a document written in HTML. CSS is used to control the style of a webpage, including the font, color, and layout."

        },
        {
            "image":"image/react.png",
            "title":"REACT",
            "description":"eact is a JavaScript library for building user interfaces. It was developed by Facebook, and is often used for building single-page applications and mobile applications."

        }
    ]
   
    const main = list.map((data ,index)=>{
        return(
            <motion.div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="300" 
            className="li " key={index} layout onClick={()=>setIsOpen(index === isOpen ? false : index)} initial={{ borderRadius: 10 }}>
                <motion.div className="avatar" layout ><img src={data.image} alt={data.title}/></motion.div>
                <h2>{data.title}</h2>
                <AnimatePresence>
                    {isOpen===index && <motion.div
                        className="content"
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                     <p> {data.description}</p>
                    </motion.div>}
                </AnimatePresence>
             </motion.div>
        )
    })
    return ( 
        <div className="top-languages TopLanguages">
            <h2>Top Languages</h2>
            <LayoutGroup>
                <motion.div className="ul grid" layout >
                    {main}
                </motion.div>
            </LayoutGroup>
        </div>
     );
}
 
export default TopLanguages;