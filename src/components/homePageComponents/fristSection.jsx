import React,{useEffect, useState} from 'react'
import SocialLinks from '../SocialLinks';
import SVG from '../SVG';
import ButtonComponent from '../buttonComponent/buttonComponent';
import { useSelector } from "react-redux";
import '../../styles/home.css'
import geolanguage from "../../geolang.json"
import englanguage from "../../englang.json"

export default function FristSection({handler}) {    
    const language = useSelector( state =>  state.language.value)
    const [languageJson, setLanguageJson] = useState(geolanguage)
    
    useEffect(()=>{
        if(language === 'geo'){
            setLanguageJson(geolanguage)
        }else if (language === 'eng') {
            setLanguageJson(englanguage)
        }
    },[language])


  return (
    <>  
        <div className="home geoStyle">
            <div className='main_screen_div'>
                <SVG />

                <ButtonComponent value={languageJson.projects} handler={handler}/>
            </div>
            <SocialLinks />
        </div>
    </>

  )
}
