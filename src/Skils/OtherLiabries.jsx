import { Box, Paper, Typography ,Divider,Chip} from "@mui/material";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { useState } from "react";
import InsetList from "./InsetList";


const OtherLiabries = () => {
    // main component foe other libraries 
    
    const software =[
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
    const design = [
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
   const soft1=software.slice(0,5)
   const soft2=software.slice(5,10)
    
    return ( 
        <Paper sx={{width:"90%",margin:"auto",mt:4,height:"400px",p:4,boxSizing:"border-box",display:"flex",flexDirection:{xs:"column",lg:"row"}}}>
           <Box  sx={{width:"33%",display:"flex",flexDirection:"column"}}>
                <Box sx={{width:"100%"}}>
                    <Divider variant="inset" sx={{margin:"auto"}}>
                        <Chip label="SOFTWARE DEVELOPMENT" size="large" />
                    </Divider>
                </Box>
                <Box>
                    <InsetList data={soft1}/>
                </Box>
           </Box>
           <Divider orientation="vertical" flexItem sx={{mx:2}}/>
           <Box   sx={{width:"33%",display:"flex",flexDirection:"column"}}>
                <Box sx={{width:"100%",}}>
                    <Divider variant="inset" sx={{margin:"auto"}}> 
                        <Chip label="SOFTWARE DEVELOPMENT" size="large" />
                    </Divider>
                </Box>
                <Box>
                    <InsetList data={soft2}/>
                </Box>
           </Box>
           <Divider orientation="vertical" flexItem sx={{mx:2}}/>
           <Box  sx={{width:"33%",display:"flex",flexDirection:"column"}}>
                <Box sx={{width:"100%"}}>
                    <Divider  variant="inset" sx={{margin:"auto"}}>
                        <Chip label="OTHER TOOLS" size="large" />
                    </Divider>
                </Box>
            <Box>
                    <InsetList data={design}/>
                </Box>
           </Box>
        </Paper>
     );
}
 
export default OtherLiabries;