import {React, useEffect, useState, useRef,  } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { langContext } from "../context";
import despoIMG   from '../../images/despo_img_512.webp'
import menu       from '../../images/menu.png'
import close      from '../../images/close.png'

import "./navbar.css"

const imageStyle = {
    width: '50px',
    borderRadius:'50%'
}

export default function Navbar(props){
    const {geoLang} = useContext(langContext)
    const {engLang} = useContext(langContext)
    const {isEng} = useContext(langContext)
    const {setIsEng} = useContext(langContext)
    
    const navLanguageEng     = useRef()
    const navLanguageGeo     = useRef()
    const burgerLanguageEng  = useRef()
    const burgerLanguageGeo  = useRef()
    const navbarTitleHref    = useRef()
    const navHomeRef         = useRef()
    const navAboutRef        = useRef()
    const navProjRef         = useRef()
    const navContRef         = useRef()
    const burgerMain         = useRef()
    const burgerAbout        = useRef()
    const burgerProj         = useRef()
    const burgerCont         = useRef()

    const [menuIMG, setMenuIMG] = useState(menu)
    const [dashbrd, setDashbrd] = useState('menu_dashboard')
    const [overlay, setOverlay] = useState('overlay')
    const [toggle, setToggle]   = useState(false)
    
    function toggleMenu() {
        if(!toggle){
            setMenuIMG(close)
            setDashbrd('menu_dashboard visible')
            setOverlay('overlay visible')
            setToggle(true)
        }else{
            setMenuIMG(menu)
            setDashbrd('menu_dashboard')
            setOverlay('overlay')
            setToggle(false)
        }
    }

    const handleClick = (refname) => {
        refname.current?.scrollIntoView({behavior: 'smooth'});
    };

    const lg = localStorage.getItem('language');

    useEffect(()=>{
        navLanguageGeo.current.style.display = 'none'
        burgerLanguageGeo.current.style.display = 'none'
        navbarTitleHref.current.innerText = 'თორნიკე დესპოტაშვილი'
        navHomeRef.current.innerText = 'მთავარი'
        navAboutRef.current.innerText = 'შესახებ'
        navProjRef.current.innerText = 'პროექტები'
        navContRef.current.innerText = 'კონტაქტი'
        burgerMain.current.innerText = 'მთავარი'
        burgerAbout.current.innerText = 'შესახებ'
        burgerProj.current.innerText = 'პროექტები'
        burgerCont.current.innerText = 'კონტაქტი'
        navLanguageEng.current.style.display = 'block'
        navLanguageGeo.current.style.display = 'none'
        burgerLanguageEng.current.style.display = 'flex'
        burgerLanguageGeo.current.style.display = 'none'        
    


        if(lg === 'eng') {
        setIsEng(true)
        navbarTitleHref.current.innerText = 'tornike despotashvili';
        navHomeRef.current.innerText = 'Home'
        navAboutRef.current.innerText = 'About'
        navProjRef.current.innerText = 'Projects'
        navContRef.current.innerText = 'Contact'
        burgerMain.current.innerText = 'Home'
        burgerAbout.current.innerText = 'About'
        burgerProj.current.innerText = 'Projects'
        burgerCont.current.innerText = 'Contact'
        navLanguageEng.current.style.display = 'none'
        navLanguageGeo.current.style.display = 'block'
        burgerLanguageEng.current.style.display = 'none'
        burgerLanguageGeo.current.style.display = 'flex'
        }
    },[isEng])

    return(
        <>
        {/* ნავიგაცია /////////////////////////////////////////// */}
        <div className="navbar geoStyle">
            <div className="navbar_inner">
                <div className="nav_left">
                    <img src={despoIMG} style={imageStyle} alt='logo'/>
                    <Link to="/"><p ref={navbarTitleHref}></p></Link>
                </div>

                <div className="nav_right">
                    <Link to='/' className="navLinks"  ref={navHomeRef}></Link>
                    <Link to='' className={`navLinks ${props.display}`}  ref={navAboutRef} onClick={()=>handleClick(props.refing)}></Link>
                    <Link to='/Projects' className={`navLinks ${props.display}`}ref={navProjRef}></Link>
                    <Link to='' className={`navLinks ${props.display}`}  ref={navContRef}  onClick={()=>handleClick(props.refcontact)}></Link>
                    <p className="navLinks" ref={navLanguageEng} onClick={engLang}>ENG</p>
                    <p className="navLinks" ref={navLanguageGeo} onClick={geoLang}>GEO</p>
                </div>

                <div className="burger_menu">
                    <img className="menu_bars" src={menuIMG} onClick={()=> toggleMenu()} alt='menu'/>
                </div>
            </div>
        </div>

        <div className={dashbrd} onClick={()=> toggleMenu()}>
            <div><Link to='/' className="navLinks geoStyle"  ref={burgerMain}></Link></div>
            <div className={`${props.display}`}><Link to='' className="navLinks geoStyle"  ref={burgerAbout} onClick={()=>handleClick(props.refing)}></Link></div>
            <div className={`${props.display}`}><Link to='/Projects' className="navLinks geoStyle" ref={burgerProj}></Link></div>
            <div className={`${props.display}`}><Link to='' className="navLinks geoStyle" ref={burgerCont} onClick={()=>handleClick(props.refcontact)}></Link></div>
            <div ref={burgerLanguageEng} onClick={engLang}><p className="navLinks geoStyle">ENG</p></div>
            <div ref={burgerLanguageGeo} onClick={geoLang}><p className="navLinks geoStyle">GEO</p></div>
        </div>

        <div className={overlay} onClick={()=> toggleMenu()}></div>
        </>
    )
}