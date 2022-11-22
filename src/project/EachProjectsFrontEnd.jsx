import { FaGithub} from 'react-icons/fa'
import { FiLink2} from 'react-icons/fi'

const EachProjectFrontEnd  = ({projectSwitch}) => {
    const projectListFrontend=[
        "1",
        "2",
        "3",
        '4',
        "5",
        "6"
    ]
    const frontEndMap = projectListFrontend.map((data,index)=>{
        return(
            <div key={index} className="project-section">
                <div></div>
                <div>
                    <a href=""><div><FaGithub size={24}/></div></a>
                    <a href=""><div><FiLink2 size={24}/></div></a>
                    
                </div>
            </div>
        )
    })
    return ( 
        <div className={`each-project-frontEnd grid ${ projectSwitch? "projectSwitchFalse" : "projectSwitchTrue"}`}>
            {frontEndMap}
        </div>
     );
}
 
export default EachProjectFrontEnd ;