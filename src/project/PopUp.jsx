const PopUp = ({pills}) => {
    console.log(pills)
    const eachPills =pills.map((data,index)=>{
        return(
            <div className="eachPill">{data}</div>
        )
        
    })
    return ( 
        <div className="pop_up">
            <div>
                <div className="pill">
                    {eachPills}
                </div>
                <div className="text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi laudantium atque iste perferendis illum enim tenetur minima ut veritatis repudiandae quo accusantium ipsum inventore adipisci velit eaque, iure mollitia impedit.
                </div>

            </div>
        </div>
     );
}
 
export default PopUp;