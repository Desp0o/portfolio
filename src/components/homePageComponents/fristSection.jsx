import React, {useRef, useEffect} from 'react'
import SocialLinks from '../SocialLinks';
import SVG from '../SVG';
import ButtonComponent from '../buttonComponent/buttonComponent';
import { useSelector } from "react-redux";

import '../../styles/home.css'

export default function FristSection({handler}) {
    const projBtnRef = useRef()
    
    const language = useSelector( state =>  state.language.value)
    
    useEffect(()=>{
        if(language === 'geo'){
            projBtnRef.current.innerText = 'პროექტები'
        }else if (language === 'eng') {
            projBtnRef.current.innerText = 'PROJECTS'
        }
    },[language])


  return (
    <>  
        <div className="home geoStyle">
            <div className='main_screen_div'>
                <SVG />

                <ButtonComponent value={projBtnRef} handler={handler}/>
            </div>
            <SocialLinks />
        </div>
    </>

  )
}
