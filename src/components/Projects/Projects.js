import {React, useEffect, useRef} from "react";
import { ProjectArray } from "./ProjectArrayData";
import Navbar from "../navbar/navbar";

import './project.css'
import '../../index.css'



import Footer     from "../footer/footer";

function PagePrj(props) {
    const button = useRef()
    const mainTitelRef = useRef()

    
    const redirect = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    } 

    const lg = localStorage.getItem('language');
    
    useEffect(()=>{
        mainTitelRef.current.innerText = 'პროექტები'

        if(lg === 'eng') {
            mainTitelRef.current.innerText = 'Here You Are!'
        }

    },[props.isEng])


    
    return(
    <div className="geoStyle">

    <Navbar eng={props.eng} geo={props.geo} isEng={props.isEng} refing={props.refing} refcontact={props.refcontact} display='displayNone'/>

        {/* mainScreen */}
        <div className="mainScreen">
            <h1 ref={mainTitelRef} style={{textAlign:'center'}}>პროექტები</h1>

        <div className="projects" >
            <div className="projects_inner" id="proj">

                {ProjectArray.map((project)=>{
                    return(
                        <div key={project.id}>
                        <div className="prj" >
                            <div className="prj_img">
                                <img className="project_image" src={project.image} alt='project cover'/>
                            </div>


                            <div className="prj_inner">
                                <h3>{project.title}</h3>
                                <p>{localStorage.language === 'eng' ? `${project.descriptionEng}` : `${project.description}`} {project.framework}</p>
                               

                                <span className="button_to_cont visitBTN">
                                    <span ref={button} className='button_to_cont_inner' onClick={()=> redirect(project.link)}>
                                    {localStorage.language === 'eng' ? `${project.buttonEng}` : `${project.button}`}
                                    </span>
                                </span>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>
        </div>
            </div>

        {/* footer ///////////////////// */}
        <Footer iseng={props.isEng}/>

    </div>
    );
}

export default PagePrj;