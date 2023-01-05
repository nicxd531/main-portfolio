const HoverDescription = ({title , description,link}) => {
    console.log(link)
    return ( 
        <a href={link} className="hoverDescription">
            <h2>article website</h2>
            <p>{description}</p>
        </a>
     );
}
 
export default HoverDescription;