import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { useState } from "react";


const DesignTools = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)
    const list = [
        {
            "image": "image/xd.png",
            "title": "ADOBE XD",
            "description": "Adobe XD is a user experience design tool developed by Adobe that is used to create high-fidelity prototypes of websites and mobile applications. It is part of the Adobe Creative Cloud suite of design tools, and is often used by designers to create wireframes, mockups, and interactive prototypes of user interfaces."

        },
        {
            "image": "image/photoshop.png",
            "title": " PHOTOSHOP",
            "description": "Adobe Photoshop is a popular image editing software developed and published by Adobe. It is used by photographers, graphic designers, and artists to create and manipulate digital images."

        },
        {
            "image": "image/figma.png",
            "title": "FIGMA",
            "description": "Figma is a cloud-based design and prototyping tool that is used to create user interfaces, websites, and mobile applications. It is a popular choice among designers due to its ability to support real-time collaboration and its cross-platform compatibility."

        },
        {
            "image": "image/illustrator.png",
            "title": "ILLUSTRATOR",
            "description": "Adobe Illustrator is a popular vector graphics editor developed and published by Adobe. It is used by graphic designers, artists, and illustrators to create and edit vector graphics such as logos, icons, and illustrations."

        }
    ]

    const main = list.map((data, index) => {
        return (
            <motion.div className="li " key={index} layout onClick={() => setIsOpen(index === isOpen ? false : index)} initial={{ borderRadius: 10 }}>
                <motion.div className="avatar" layout ><img src={data.image} alt={data.title} /></motion.div>
                <h2>{data.title}</h2>
                <AnimatePresence>
                    {isOpen === index && <motion.div
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
        <div 
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="400"
            className="top-languages DesignTools">
            <h2>designs tools</h2>
            <LayoutGroup>
                <motion.div className="ul grid" layout >
                    {main}
                </motion.div>
            </LayoutGroup>
        </div>
    );
}

export default DesignTools;