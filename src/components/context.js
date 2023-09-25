import { useState, createContext, useEffect } from "react";

import sun from "../images/sun.webp"
import moon from "../images/moon.webp"

export const langContext = createContext()

export const LangContexProvider = ({ children }) => {

    const [isEng, setIsEng] = useState(false)
     
    const engLang =()=>{
    localStorage.setItem("language", "eng");
    setIsEng(true)
    }

    const geoLang =()=>{
    localStorage.setItem("language", "geo");
    setIsEng(false)
    }

   
    // **********************************
    // DARK MODE LOCIG
    // **********************************
    
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode') === 'true')
    const [bgColor, setBgColor] = useState('App') //მთავარი ბექგრაუნდი
    const [socialClass, setSocialClass] = useState('sociala') //სოც. იქონები
    const [navbarClass, setNavbarClass] = useState('navbar geoStyle') //ნავბარის კლასი
    const [navLinksClass, setNavLinksClass] = useState('navLinks') //ნავ ლინკები
    const [titleClass, setTitleClass] = useState('main_title') //სათაურები
    const [formBg, setFormBg] = useState('form_parent') //ფორმის ბექგრაუნდი
    const [dashBoardMode, setDashboardMode] = useState('menu_dashboard') //დეშბორდი
    const [skillTitle, setSkillTitle] = useState('skillTitle') //სკილების სათაური
    const [togglerIco, setTogglerIco] = useState(sun) //მოუდის ტოგლერი
    
    const modeHandler = () => {
        const newMode = !isDarkMode
        setIsDarkMode(newMode)
        localStorage.setItem('darkMode', newMode)
    }

    
    useEffect(()=>{
        if(!isDarkMode){
            setBgColor('App App_Dark')
            setSocialClass('social App_Darker')
            setNavbarClass('navbar geoStyle App_Darker')
            setNavLinksClass('navLinks navLinks_Dark')
            setTitleClass('main_title main_title_Dark')
            setFormBg('form_parent form_parent_dark')
            setDashboardMode('menu_dashboard menu_dashboard_dark')
            setSkillTitle('skillTitle skillTitle_dark')
            setTogglerIco(sun)
        }else{
            setBgColor('App')
            setSocialClass('social')
            setNavbarClass('navbar geoStyle')
            setNavLinksClass('navLinks')
            setTitleClass('main_title')
            setFormBg('form_parent')
            setDashboardMode('menu_dashboard')
            setSkillTitle('skillTitle')
            setTogglerIco(moon)
        }
    },[isDarkMode])


    return(
        <langContext.Provider 
            value={{
                    isEng, 
                    setIsEng, 
                    geoLang, 
                    engLang,
                    modeHandler,
                    isDarkMode, 
                    dashBoardMode, 
                    formBg, 
                    titleClass, 
                    bgColor, 
                    socialClass, 
                    navbarClass, 
                    navLinksClass,
                    skillTitle,
                    togglerIco
                }}>
            {children}
        </langContext.Provider>
    )
}
