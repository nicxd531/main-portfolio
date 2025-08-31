import { Box } from "@mui/material";

const WhoAmI = () => {
    // who am i main component
    return (
        <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="350"
            className="who-am-i">
            <div>
                <h2>who am i ?</h2>

                <hr />
            </div>
            <div style={{ overflow: "auto", marginTop: "15px" }}>
                <p>
                    Fullstack Software Developer from Lagos,Nigeria
                </p>
                <p>
                    I'm a solution-driven Software Developer passionate about problem-solving, innovation, and continuous growth. I specialize in full-stack development, building scalable applications, optimizing digital workflows, and enhancing user experiences. With experience in React, Next.js,React Native, Node.js,Express.js and MongoDB, I develop efficient, high-performance solutions. Committed to refining my skills, I embrace creativity, adaptability, and critical thinking to drive impactful software solutions.
                </p>

                <p>With a collaborative approach and a commitment to excellence, I offer a range of services tailored to meet the unique needs of each client and employer. From custom software development to ongoing maintenance and support, I am dedicated to helping businesses thrive in today's competitive landscape.</p>
                <p>Here's a glimpse of the services I offer:</p>
                <p style={{ textDecoration: "none" }}>
                    <ol>
                        <li style={{ textDecoration: "none" }}>Custom frontend development using React, next.js, HTML, CSS, typescript, material ui and JavaScript.</li>
                        <li>backend development using express, mongo db, mongoose, and node.js.</li>
                        <li>Agile development methodologies for efficient project delivery.</li>
                        <li>Expertise in crafting robust and scalable software applications.</li>
                        <li>Ongoing skills enhancement to stay ahead in the rapidly evolving software development landscape.</li>
                        <li>Collaborative approach with open communication to align with client or employers objectives.</li>
                        <li>Maintenance, support, and optimization services for long-term success.</li>
                    </ol>
                </p>
                <p >Core Professional Competencies</p>
                <p>
                    <ul style={{ textDecoration: "none", fontSize: { xs: "1rem" } }}>
                        <li>✢ Mobile-first design and development to ensure optimal user experience on all devices.</li>
                        <li>✢ Innovative problem-solving and cutting-edge solutions to meet the unique needs of each client.</li>
                        <li>✢ Expertise in creating visually stunning and highly functional websites.</li>
                        <li>✢ Constant skills development and staying up-to-date with the latest technologies to stay ahead of the curve in the ever-evolving web development industry.</li>
                        <li>✢ Collaboration and open communication throughout the development process to bring your vision to life.</li>
                        <li>✢ Ongoing maintenance and support to ensure your website remains fully functional and up-to-date.</li>
                        <li>✢ Optimization for better performance and faster load time.</li>
                        <li>✢ Cross-browser compatibility</li>
                        <li>✢ Accessibility for all users.</li>
                        <li>✢ Integration with various platforms and technologies.</li>
                        <li>✢ Developing interactive and dynamic user interfaces.</li>
                        <li>✢ Analytical thinking and strategic problem solving</li>
                        <li>✢ Effective verbal and written communication</li>
                        <li>✢ Agile learning and quick adaptation to new technologies</li>
                        <li>✢ Creative and innovative approach to challenges</li>
                        <li>✢ Meticulous attention to detail and precision in execution</li>
                    </ul>
                </p>
                <p > If you're looking for a front-end developer who's passionate about innovation, highly skilled, and dedicated to delivering exceptional results, I would love to hear from you.</p>
            </div>
        </div>
    );
}

export default WhoAmI;