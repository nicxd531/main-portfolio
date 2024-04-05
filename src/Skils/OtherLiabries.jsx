import { Box, Paper, Typography, Divider, Chip } from "@mui/material";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { useState,useEffect } from "react";
import InsetList from "./InsetList";
import Pg from "./Pg";

const OtherLiabries = () => {
    // states for current page 
    const [currentPage, setCurrentPage] = useState(1);
    const [screenSize, setScreenSize] = useState( window.innerWidth);
    const itemsPerPage = screenSize < 500 ? 4 :5; // Set the number of items per page
    console.log(itemsPerPage)

    // main component foe other libraries 
    const frontend = [
        {
            "image": "image/react.png",
            "title": "REACT",
        },
        {
            "image": "image/html.png",
            "title": "HTML",
        },
        {
            "image": "image/css.png",
            "title": "CSS",
        },
        {
            "image": "image/redux.png",
            "title": "REDUX",
        },
        {
            "image": "image/scss.png",
            "title": "SASS"
        },
        {
            "image": "image/material ui.png",
            "title": "MATERIAL UI"
        },
        {
            "image": "image/icons8-bootstrap-480.png",
            "title": "BOOTSTRAP"
        },
        {
            "image": "image/tailwind-css-icon.png",
            "title": "TAILWIND"
        },
        {
            "image": "image/framer-motion-seeklogo.com.svg",
            "title": "FRAMER MOTION"
        },


    ]
    const backend = [
        {
            "image": "image/express js.png",
            "title": "EXPRESS",
        },
        {
            "image": "image/Mongoose.js.png",
            "title": "MONGOOSE",
        },
        {
            "image": "image/mongodb.png",
            "title": "MONGO DB",
        },
        {
            "image": "image/nodejs.png",
            "title": "NODE.JS",
        },

        {
            "image": "image/firebase.png",
            "title": "FIREBASE",
        },
        {
            "image": "image/socket-io.png",
            "title": "SOCKET.IO",
        },
        {
            "image": "image/next auth.png",
            "title": "NEXT AUTH",
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
    // const for listing required pages 
    // data slicing constant for items on each page
    const FE = frontend.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const BE = backend.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const designData = design.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const totalPages = Math.ceil(frontend.length / itemsPerPage);
    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <Paper sx={{overflow:"hidden", width: "90%", margin: "auto", mt: 2, height: { xs: "930px", lg: "380px" }, p: 4, boxSizing: "border-box", display: "flex", flexDirection: { xs: "column", lg: "row" } }}>
                <Box sx={{ width: "33%", display: "flex", flexDirection: "column" }}>
                    <Box sx={{ width: { xs: "300px", lg: "100%" } }}>
                        <Divider variant="inset" sx={{ margin: "auto" }}>
                            <Chip label="SOFTWARE DEVELOPMENT STACK" size="large" />
                        </Divider>
                    </Box>
                    <Box>
                        <InsetList data={FE} />
                    </Box>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
                <Box sx={{ width: "33%", display: "flex", flexDirection: "column" }}>
                    <Box sx={{ width: { xs: "300px", lg: "100%" } }}>
                        <Divider variant="inset" sx={{ margin: "auto" }}>
                            <Chip label="SOFTWARE DEVELOPMENT STACK" size="large" />
                        </Divider>
                    </Box>
                    <Box>
                        <InsetList data={BE} />
                    </Box>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
                <Box sx={{ width: "33%", display: "flex", flexDirection: "column" }}>
                    <Box sx={{ width: { xs: "300px", lg: "100%" } }}>
                        <Divider variant="inset" sx={{ margin: "auto" }}>
                            <Chip label="OTHER TOOLS" size="large" />
                        </Divider>
                    </Box>
                    <Box>
                        <InsetList data={designData} />
                    </Box>
                </Box>
            </Paper>
            <Box >
                <Pg totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </Box>
        </>
    );
}

export default OtherLiabries;