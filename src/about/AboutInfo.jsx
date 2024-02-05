import { Divider } from "@mui/material";

const AboutInfo = () => {
    // main about info component
    return ( 
    <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="300"
        className="about-info">
        <h2>name: ola olasunkanmi</h2>
        <h2>email: finixd531@gmail.com</h2>
        <h2>profile: front-end developer</h2>
        <h2>phone: +234 808 8629 8113</h2>
        <Divider sx={{width:"100%",mt:3,ml:0}} variant="inset" />
    </div> 
    );
}
 
export default AboutInfo;