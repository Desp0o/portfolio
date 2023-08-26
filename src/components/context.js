import { useState, createContext } from "react";

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

    return(
        <langContext.Provider value={{isEng, setIsEng, geoLang, engLang}}>
            {children}
        </langContext.Provider>
    )
}
