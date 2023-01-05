import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { useState } from "react";


const OtherLiabries = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)
    const list =[
        {
            "image":"image/scss.png",
            "title":"SASS",
            "description":"Sass is a stylesheet language that extends CSS with features such as variables, nested rules, and mixins. It allows you to write more organized and maintainable CSS code, and can help to improve the workflow of web development projects."

        },
        {
            "image":"image/material ui.png",
            "title":"MATERIAL UI",
            "description":"Material-UI is a popular React UI framework that provides a set of reusable React components that implement Google's Material Design guidelines. It is designed to make it easy for developers to build beautiful and consistent user interfaces."

        },
        {
            "image":"image/tailwind-css-icon.png",
            "title":"TAILWIND",
            "description":"Tailwind CSS is a utility-first CSS framework that is designed to make it easy to build custom user interfaces. It provides a set of low-level utility classes that you can use to build complex styles without the need to write custom CSS.Unlike other CSS frameworks that provide a set of predefined "

        },
        {
            "image":"image/icons8-bootstrap-480.png",
            "title":"BOOTSTRAP",
            "description":"Bootstrap is a popular HTML, CSS, and JavaScript framework for building responsive, mobile-first websites. It was developed by Twitter, and is one of the most widely used front-end frameworks for web development."

        },
        {
            "image":"image/framer-motion-seeklogo.com.svg",
            "title":"FRAMER MOTION",
            "description":"Framer Motion is a popular open-source animation library for React that is designed to make it easy to create complex and beautiful animations for your React projects. It is based on the Animations API provided by the Framer library, and provides a simple and intuitive interface for building animations."

        },
        {
            "image":"image/react.png",
            "title":"REACT",
            "description":"React allows developers to create reusable UI components, which can help to make code more modular and easier to maintain. It uses a virtual DOM (Document Object Model) to optimize updates to the actual DOM, which can help to improve the performance of applications."

        }
    ]
   
    const main = list.map((data ,index)=>{
        return(
            <motion.div 
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="350"
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
        <div className="top-languages OtherLiabries">
            <h2>Other Liabries</h2>
            <LayoutGroup>
                <motion.div className="ul grid" layout >
                    {main}
                </motion.div>
            </LayoutGroup>
        </div>
     );
}
 
export default OtherLiabries;