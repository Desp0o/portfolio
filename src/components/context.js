import { useState, createContext, useEffect } from "react";

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
    const [bgColor, setBgColor] = useState('App')
    const [socialClass, setSocialClass] = useState('sociala')
    const [navbarClass, setNavbarClass] = useState('navbar geoStyle')
    const [navLinksClass, setNavLinksClass] = useState('navLinks')
    const [titleClass, setTitleClass] = useState('main_title')
    const [formBg, setFormBg] = useState('form_parent')
    const [dashBoardMode, setDashboardMode] = useState('menu_dashboard')
    
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
            setNavLinksClass('navLinks App_Dark_text')
            setTitleClass('main_title main_title_Dark')
            setFormBg('form_parent form_parent_dark')
            setDashboardMode('menu_dashboard menu_dashboard_dark')
        }else{
            setBgColor('App')
            setSocialClass('social')
            setNavbarClass('navbar geoStyle')
            setNavLinksClass('navLinks')
            setTitleClass('main_title')
            setFormBg('form_parent')
            setDashboardMode('menu_dashboard')
        }
    },[isDarkMode])


    return(
        <langContext.Provider value={{isEng, setIsEng, geoLang, engLang,isDarkMode, dashBoardMode, formBg, titleClass, bgColor, socialClass, navbarClass, navLinksClass, modeHandler}}>
            {children}
        </langContext.Provider>
    )
}
