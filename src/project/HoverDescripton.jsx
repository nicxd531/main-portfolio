const HoverDescription = ({title , description,link}) => {
    console.log(link)
    
    return ( 
        <a className="hoverDescription">
            <h2>{title}</h2>
            <p>{description}</p>
        </a>
     );
}
 
export default HoverDescription;