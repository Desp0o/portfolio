import {React, useState} from "react";
import {Link} from  "react-router-dom";
import './PROJ_mian_screen.css'
import './project.css'
import './navbar.css'
import './footer.css'
import './res_PROJ.css'
import './georgian.css'

import despoIMG   from './images/despo_img.png'
import menu       from './images/menu.png'
import close      from './images/close.png'
import carco      from './images/carco_prj.png'
import dlab       from './images/3dlab.png'
import pixnft     from './images/pixnft.png'
import indian     from './images/indian.png'
import linkedLi   from './images/linkedin-light.png'
import twitterLi  from './images/twitter-light.png'
import facebookLi from './images/facebook-light.png'
import githubLi   from './images/github-light.png'
import archic     from './images/archic_prj.png'
import chess      from './images/chess_prj.png'
import portfolio  from './images/portfolio_prj.png'                
import calApp     from './images/calculator_app.png'
import nexus      from './images/nexus.png'

const projectArray = [
    {id:1, image:`${carco}`, title:'Carco.Ge', description:'ავტო იმპორტის ვებ-გვერდი,ტრანსპორტირებისა და განბაჟების კალკულატორით.', button:'ნახვა', link:'https://carco.ge/'},
    {id:2, image:`${dlab}`, title:'3Dlab.Group', description:'ანიმაციური სტუდია, რომელიც ქმნის სხვადასხვა ტიპის 3D სარეკლამო ანიმაციებს კომპანიებისთვის.', button:'ნახვა', link:'https://3dlab.group/'},
    {id:3, image:`${pixnft}`, title:'pixnft.me', description:'NFT - ვებ-გვერდი, ინოვაციური გეგმებით.', button:'ნახვა', link:'https://pixnft.me/'},
    {id:4, image:`${nexus}`, title:'Nexus Logistic LLC', description:'ამერიკული გადამზიდი კომპანია', button:'ნახვა', link:'https://teamofnexus.com/', framework:' React Js.'}, 
    {id:5, image:`${indian}`, title:'Moto Shop Clone', description:'მოტოციკლეტების მაღაზიის პროექტი.', button:'ნახვა', link:'https://desp0o.github.io/IndianMotorcycle/'},
    {id:6, image:`${archic}`, title:'Architect Clone', description:'თანამედროვე,ესეთიკური, ტრადიციული ღირებულებების მქონე არქიტექტურული დიზაინები.', button:'ნახვა', link:'https://desp0o.github.io/Archic/'},
    {id:7, image:`${chess}`, title:'Chess Championship', description:'ჭადრაკის ჩემპიონატის რეგისტრაციის ფორმა', button:'ნახვა', link:'https://desp0o.github.io/RedBeryy-Chess-Hero/', framework:' React Js.'},
    {id:8, image:`${portfolio}`, title:'Devweb.cc', description:'პორტფოლიო ვებ დეველოპერისთვის', button:'ნახვა', link:'https://devweb.cc/', framework:' React Js.'},
    {id:9, image:`${calApp}`, title:'Carco.Ge Android APP', description:'ტრანსპორტირების და განბაჟების კალკუალტორის აპლიაკცია ანდორიდ სისტემისტვის.', button:'გადმოწერა', link:'https://drive.google.com/file/d/13f4GXvhRR9DFW4wAu0RFgsXPmbfm6RKH/view'}

]


function PagePrj() {
    const socialLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

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

    
    return(
    <div style={{width:'100%', height:'100vh'}} className="geoStyle">


        {/* ნავიგაცია /////////////////////////////////////////// */}
        <nav>
            <div className="nav_left">
                <img src={despoIMG} style={imageStyle} alt='logo'/>
               <Link to="/.Home" style={{textDecoration:'none', color:'unset'}}> <p>თორნიკე დესპოტაშვილი</p></Link>
            </div>

            <div className="nav_right">
                <Link to='./Home' className="navLinks">მთავარი გვერდი</Link>
                <Link to='/ProjENG' className="navLinks">ENG</Link>
            </div>

            <div className="burger_menu">
                <img className="menu_bars" src={menuIMG} onClick={()=> toggleMenu()} alt='menu'/>
            </div>
        </nav>

        <div className={dashbrd} id="proj_dashboard" onClick={()=> toggleMenu()}>
            <div><Link to='./Home' className="navLinks">მთავარი გვერდი</Link></div>
            <div><Link to='/ProjENG' className="navLinks">ENG</Link></div>
        </div>

        <div className={overlay} onClick={()=> toggleMenu()}></div>


        <div className="mainScreen">
            <h1 style={{textAlign:'center'}}>პროექტები</h1>

        <div className="projects" >
            <div className="projects_inner" id="proj">

                {projectArray.map((project)=>{
                    return(
                        <>
                        <div className="prj">
                            <div className="prj_img">
                                <img className="project_image" src={project.image} alt='3dlab'/>
                            </div>


                            <div className="prj_inner">
                                <h3>{project.title}</h3>
                                <p>{project.description}<b>{project.framework}</b></p>

                                <span className="button_to_cont visitBTN">
                                    <span className="button_to_cont_inner" onClick={()=> redirect(project.link)}>{project.button}</span>
                                </span>
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
            </div>

        {/* footer ///////////////////// */}
        <div className="footer">
            <div className="footer_top">
                <div className="footer_top_left">
                    <p className="footer_hedaer geoStyle">ელ. ფოსტა</p>
                    <p className="footer_hedaer_txt" style={{color:'#fff'}}>info@devweb.cc</p>
                </div>

                <div className="footer_top_right">
                    <p className="footer_hedaer geoStyle">ქსელები</p>
                    <span className="footer_social">
                        <img className="footer_social_img" alt='linked' src={linkedLi} onClick={()=> socialLink("https://www.linkedin.com/in/tornike-despotashvili-250150219/")} />
                        <img className="footer_social_img" alt='twitter' src={twitterLi} onClick={()=> socialLink("https://twitter.com/TDespotashvili")} />
                        <img className="footer_social_img" alt='facebook' src={facebookLi} onClick={()=> socialLink("https://www.facebook.com/tornike.despotashvili/")} />
                        <img className="footer_social_img" alt='github' src={githubLi} onClick={()=> socialLink("https://github.com/Desp0o")} />
                    </span>
                </div>
            </div>

            <div className="footer_bottom">
                <p style={{fontSize:'12px', color:'#fff', textAlign:'center'}}>©თორნიკე დესპოტაშვილი</p>
            </div>
        </div>


    </div>
    );
}

export default PagePrj;