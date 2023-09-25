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
    const [isDark, setIsDark] = useState(localStorage.getItem('darkModeToggler'))
    const [bgColor, setBgColor] = useState('App')
    
    const darkMode = {
        bgColor: 'App_Dark',
        textColor: '#fff'
    }

    // localStorage.setItem("darkModeStorage", JSON.stringify(darkMode));
    // const storedDarkMode = JSON.parse(localStorage.getItem('darkModeStorage'));   

    const darkModeToggler = localStorage.getItem('darkMode')
    console.log(darkModeToggler);

    const modeHandler = () => {
        
    }


    return(
        <langContext.Provider value={{isEng, setIsEng, geoLang, engLang, bgColor, modeHandler}}>
            {children}
        </langContext.Provider>
    )
}
