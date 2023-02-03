import {React, useEffect, useRef, useState} from "react";
import {Link} from  "react-router-dom";
import { ProjectArray } from "./ProjectArrayData";

import './project.css'
import '../../styles/navbar.css'
import '../../index.css'


import despoIMG   from '../../images/despo_img_512.webp'
import menu       from '../../images/menu.png'
import close      from '../../images/close.png'
import Footer     from "../footer/footer";

function PagePrj() {

    const button = useRef()
    const mainTitelRef = useRef()
    const navbarNameRef = useRef()
    
    const backHomeref = useRef()
    const navBackHomeRef = useRef()
    const burgerLanguageGeo = useRef()
    const burgerLanguageEng = useRef()

    function  geoLang() {
        localStorage.setItem("language", "geo");
        setIsEng(false)
    }
    
    function engLang() {
        localStorage.setItem("language", "eng");
        setIsEng(true)
    }
    
    const lg = localStorage.getItem('language');

    const imageStyle = {
        width: '50px',
        borderRadius:'50%'
    }
    
    const redirect = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    } 

    const [toggle, setToggle]   = useState(false)
    const [menuIMG, setMenuIMG] = useState(menu)
    const [dashbrd, setDashbrd] = useState('menu_dashboard')
    const [overlay, setOverlay] = useState('overlay')

    const [engSwitch, setEngSwitch] = useState('navLinks')
    const [geoSwitch, setGeoSwitch] = useState('navLinks')

    const [isEng, setIsEng] = useState(false)


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

    useEffect(()=>{
        burgerLanguageGeo.current.style.display = 'none'
        setGeoSwitch('navLinks displayNone')

    }, [])
    
useEffect(()=>{

    
        setIsEng(false)
        setGeoSwitch('navLinks displayNone')
        setEngSwitch('navLinks')
        burgerLanguageEng.current.style.display = 'flex'
        burgerLanguageGeo.current.style.display = 'none'
        mainTitelRef.current.innerText = 'პროექტები'
        navbarNameRef.current.innerText = 'თორნიკე დესპოტაშვილი'
        backHomeref.current.innerText = 'მთავარი გვერდი'
        navBackHomeRef.current.innerText = 'მთავარი გვერდი'
    

    if (localStorage.language === 'eng' || lg === 'eng') {
        setIsEng(true)
        setEngSwitch('navLinks displayNone')
        setGeoSwitch('navLinks')
        burgerLanguageEng.current.style.display = 'none'
        burgerLanguageGeo.current.style.display = 'flex'
        mainTitelRef.current.innerText = 'Here You Are!'
        navbarNameRef.current.innerText = 'Tornike Despotashvili'
        
        backHomeref.current.innerText = 'Back To Home'
        navBackHomeRef.current.innerText = 'Back To Home'
    }

    return
},[isEng])


    
    return(
    <div style={{width:'100%', height:'100vh'}} className="geoStyle">


        {/* ნავიგაცია /////////////////////////////////////////// */}
        <nav>
            <div className="nav_left">
                <img src={despoIMG} style={imageStyle} alt='logo'/>
               <Link to="/.Home" className="navbar_title" style={{textDecoration:'none', color:'unset'}} ref={navbarNameRef}><p >თორნიკე დესპოტაშვილი</p></Link>
            </div>

            <div className="nav_right">
                <Link to='./Home' className="navLinks" ref={navBackHomeRef}>მთავარი გვერდი</Link>
                <Link className={geoSwitch} onClick={() => geoLang()}>GEO</Link>
                <Link className={engSwitch} onClick={() => engLang()}>ENG</Link>
            </div>

            <div className="burger_menu">
                <img className="menu_bars" src={menuIMG} onClick={()=> toggleMenu()} alt='menu'/>
            </div>
        </nav>

        <div className={dashbrd}  onClick={()=> toggleMenu()}>
            <div><Link to='./Home' className="navLinks" ref={backHomeref}>მთავარი გვერდი</Link></div>
            <div ref={burgerLanguageEng}><Link to='' className="navLinks"  onClick={() => engLang()}>ENG</Link></div>
            <div ref={burgerLanguageGeo}><Link to='' className="navLinks"  onClick={() => geoLang()}>GEO</Link></div>
        </div>

        <div className={overlay} onClick={()=> toggleMenu()}></div>

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
                                <p>{localStorage.language === 'eng' ? `${project.descriptionEng}` : `${project.description}`}</p>
                               

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
        <Footer iseng={isEng}/>

    </div>
    );
}

export default PagePrj;