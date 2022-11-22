import { useState, useEffect } from "react";
const Intro = () => {
    const [text, setText]=useState(" ");
    const[fullText, setFullText]=useState("frontend developer");
    const [index, setIndex]=useState(0);

    useEffect(()=>{
        if(index < fullText.length){
            setTimeout(()=>{
                setIndex(index + 1)
                setText(text + fullText[index])
            }, 40)
        }
    },[index])
    
    return ( 
        <div className="intro">
            <h3>hello i'm</h3>
            <h1>
                ola olasunkanmi
            </h1>
            <h2>{text}</h2>
        </div>
     );
}
 
export default Intro;