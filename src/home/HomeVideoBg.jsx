const HomeVideoBg = ({ theme, darkMode, lightMode }) => {
    // home video backround component
    return (
        <div>
            {theme === "dark" ?
                <div>
                    <video autoPlay muted loop id="video" className="home-video" >
                        <source src={darkMode} />
                    </video>
                </div> :
                <video autoPlay muted loop className="home-video" >
                    <source src={lightMode} />
                </video>
            }
        </div>
    );
}

export default HomeVideoBg;