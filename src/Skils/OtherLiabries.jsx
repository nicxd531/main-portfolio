import { Box, Paper, Typography ,Divider,Chip} from "@mui/material";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { useState } from "react";
import InsetList from "./InsetList";


const OtherLiabries = () => {
    // main component foe other libraries 
    const software =[
        {
            "image":"image/scss.png",
            "title":"SASS" 
       },
        {
            "image":"image/material ui.png",
            "title":"MATERIAL UI"
        },
        {
            "image":"image/tailwind-css-icon.png",
            "title":"TAILWIND"
        },
        {
            "image":"image/icons8-bootstrap-480.png",
            "title":"BOOTSTRAP"
        },
        {
            "image":"image/framer-motion-seeklogo.com.svg",
            "title":"FRAMER MOTION"
        },
        {
            "image":"image/react.png",
            "title":"REACT",
        },
        {
            "image":"image/firebase.png",
            "title":"FIREBASE",
        },
        {
            "image":"image/socket-io.png",
            "title":"SOCKET.IO",
        },
        {
            "image":"image/redux.png",
            "title":"REDUX",
        },
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
        <Paper sx={{width:"90%",margin:"auto",mt:4,height:{xs:"950px",lg:"400px"},p:4,boxSizing:"border-box",display:"flex",flexDirection:{xs:"column",lg:"row"}}}>
           <Box  sx={{width:"33%",display:"flex",flexDirection:"column"}}>
                <Box sx={{width:{xs:"300px",lg:"100%"}}}>
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
                <Box sx={{width:{xs:"300px",lg:"100%"}}}>
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
                <Box sx={{width:{xs:"300px",lg:"100%"}}}>
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