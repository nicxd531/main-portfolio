import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { useState } from "react";


const TopLanguages = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)
    const list =[
        {
            "image":"image/html.png",
            "title":"HTML",
            "description":"quos quaerat quis minima sequi.esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod"

        },
        {
            "image":"image/javascript.png",
            "title":"JAVASCRIPT",
            "description":"quos quaerat quis minima sequi.esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod"

        },
        {
            "image":"image/css.png",
            "title":"CSS",
            "description":"quos quaerat quis minima sequi.esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod"

        },
        {
            "image":"image/react.png",
            "title":"REACT",
            "description":"quos quaerat quis minima sequi.esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod"

        }
    ]
   
    const main = list.map((data ,index)=>{
        return(
            <motion.div className="li" key={index} layout onClick={()=>setIsOpen(index === isOpen ? false : index)} initial={{ borderRadius: 10 }}>
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
        <div className="top-languages">
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