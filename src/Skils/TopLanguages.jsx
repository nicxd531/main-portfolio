import { Avatar, Paper } from "@mui/material";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { useState } from "react";



const TopLanguages = () => {
    // main TopLanguages component
    // states for opening each tags 
    const [isOpen, setIsOpen] = useState(false);

    const list = [
        {
            "image": "image/typescript.png",
            "title": "Typescript",
            "description": "TypeScript is a statically typed superset of JavaScript that adds optional types to the language. It is designed for large-scale JavaScript applications, providing developers with tools for building robust and maintainable code. TypeScript's type system helps catch errors at compile time and improves code readability and maintainability."

        },
        {
            "image": "image/javascript.png",
            "title": "JAVASCRIPT",
            "description": "JavaScript is used to add interactivity to websites by allowing the webpage to respond to user actions such as clicks, scrolls, and form input. It can also be used to manipulate the HTML and CSS on a webpage, making it an essential tool for web developers."

        },
        {
            "image": "image/nextjs.png",
            "title": "Next js",
            "description": " Next.js is a popular React framework that enables developers to build server-rendered React applications with ease. It provides features like server-side rendering (SSR), static site generation (SSG), and client-side routing, among others"

        },
        {
            "image": "image/react.png",
            "title": "REACT",
            "description": "React is a JavaScript library for building user interfaces. It was developed by Facebook, and is often used for building single-page applications and mobile applications."

        }
    ]

    const main = list.map((data, index) => {
        return (
            <Paper
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="300"
                className="li d-flex justify-content-center align-items-center " key={index} layout="true" onClick={() => setIsOpen(index === isOpen ? false : index)} initial={{ borderRadius: 10 }}>
                <h2>{data.title}</h2>
                <Avatar sx={{ ml: 3 }} src={data.image} alt="language image" variant="rounded" />
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
            </Paper>
        )
    })
    return (
        <div className="top-languages TopLanguages">
            <h2>Top Stacks</h2>
            <motion.div className="ul grid" layout >
                {main}
            </motion.div>
        </div>
    );
}

export default TopLanguages;