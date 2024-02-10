import React, { useRef, useState } from 'react';
import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import LaptopIcon from '@mui/icons-material/Laptop';
import GitHubIcon from '@mui/icons-material/GitHub';
import data from "./data.json"
import Pg from '../Skils/Pg';

const EachProjectFrontEnd  = () => {
    //main each project component
    const swiperParams = {
        loop: true, // Enable looping
        autoplay: {
          delay: 3000, // Set autoplay delay to 3 seconds
          disableOnInteraction: false, // Continue autoplay even when user interacts
        },
      };

// states for current page 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Set the number of items per page
  // const forlisting required pages 
  const totalPages = Math.ceil(data.length / itemsPerPage);
  // data slicing constant for items on each page
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
    return ( 
        <Box sx={{mt:1,}}>
           { currentData &&currentData.map((data,index)=>{
             const {title,description1,description2,link1,link2,image,stacks,benefits,features}=data
            console.log(data)
            return(
                <Box key={index} sx={{mt:{xs:0,lg:5}}} data-aos="zoom-in" data-aos-duration="1000">
                    <Divider variant="inset"sx={{margin:"auto"}}/>
                    <Box sx={{display:"flex",mt:2,flexDirection:{xs:"column",lg:"row"}}}>
                        <Box sx={{width:{xs:"100%",lg:"40%"},height:{xs:"190px",lg:"300px"}}}>
                            <Swiper
                            {...swiperParams}
                                direction={'vertical'}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Pagination,Autoplay]}
                                style={{borderRadius:"5px",borderTop:"1px solid grey",borderBottom:"1px solid grey"}}
                                className="mySwiper"
                            >
                                { image && image.map((data,index)=>{
                                    console.log(data)
                                    return(
                                        <SwiperSlide key={index} ><img src={data} alt="image" /></SwiperSlide>
                                    )
                                })}
                                
                            </Swiper>
                            <Divider variant="inset"sx={{margin:"auto"}}/>
                            <Box sx={{mt:1}}>
                                {stacks.map((data,index)=>{
                                    return(
                                        <Box sx={{display:"inline"}}>
                                            <Chip label={data} size="small" sx={{ml:{xs:0.1,lg:1},mb:{xs:1}}}/>
                                        </Box>
                                    )
                                })}
                                
                            </Box>
                        </Box>
                    <Divider  orientation="vertical" sx={{mx:2,height:"300px",display:{xs:"none",lg:"block"}}}/>
                    <Divider   sx={{height:"70px",display:{lg:"none"},width:"100%",mt:1}}/>
                <Box sx={{width:{xs:"80%",lg:"58%"},}}>
                    <Box className="scroll" sx={{height:"300px",width:{xs:"130%",lg:"100%"},overflow:"auto"}}>
                        <Typography variant="h4" sx={{fontWeight:"bold"}}>{title}</Typography>
                        <Box >
                            <Typography sx={{textAlign:"justify"}}>{description1}</Typography>
                            <Typography sx={{textAlign:"justify",mt:1}}>{description2}</Typography>
                            <Box sx={{ml:3}}>
                            <ul style={{marginTop:"5px"}}>
                            <li style={{fontWeight:"bold",fontSize:"12px",textDecoration:"none"}}>Benefits</li>
                               { benefits.map((data,index)=>{
                                return(
                                    <li key={index} style={{fontSize:"12px",textDecoration:"none"}}>{data}</li>
                                )
                               })}
                            </ul>
                            <ul style={{marginTop:"5px"}}>
                                <li style={{fontWeight:"bold",fontSize:"12px",textDecoration:"none"}}>Special features</li>
                                { features.map((data,index)=>{
                                return(
                                    <li key={index} style={{fontSize:"12px",textDecoration:"none"}}>{data}</li>
                                )
                               })}
                            </ul>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{display:{xs:"none",lg:"flex"},justifyContent:{xs:"center",lg:"flex-end"},width:"100%",mt:{xs:2,lg:1},textAlign:"center"}}>
                        <Button href={link1} variant="contained" startIcon={<LaptopIcon />}>
                            LIVE-DEMO
                        </Button>
                        <Button href={link2} sx={{ml:1}} variant="contained" endIcon={<GitHubIcon />}>
                            GITHUB
                        </Button>
                    </Box>
                </Box>
                <Box sx={{display:{xs:"flex",lg:"none"},justifyContent:{xs:"center",lg:"flex-end"},width:"100%",mt:{xs:2,lg:1},textAlign:"center"}}>
                    <Button href={link1} variant="contained" startIcon={<LaptopIcon />}>
                        LIVE-DEMO
                    </Button>
                    <Button href={link2} sx={{ml:1}} variant="contained" endIcon={<GitHubIcon />}>
                        GITHUB
                    </Button>
                </Box>
                </Box>
            </Box>
            )
           })}
           <Pg totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </Box>
     );
}
 
export default EachProjectFrontEnd ;