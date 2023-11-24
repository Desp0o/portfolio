import React, {useRef, useEffect, useContext} from 'react'
import SocialLinks from '../SocialLinks';
import SVG from '../SVG';
import { langContext } from '../context';
import ButtonComponent from '../buttonComponent/buttonComponent';

import '../../styles/home.css'

export default function FristSection({handler}) {
    const projBtnRef = useRef()
    
    const { isEng } = useContext(langContext)
    const lg = localStorage.getItem('language');
    
    useEffect(()=>{
        projBtnRef.current.innerText = 'პროექტები'

        if (lg === 'eng') {
            projBtnRef.current.innerText = 'PROJECTS'
        }
    },[isEng])


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
