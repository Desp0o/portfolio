import {React, useState} from "react";
import {Link} from  "react-router-dom";
import './PROJ_mian_screen.css'
import './project.css'
import './navbar.css'
import './footer.css'

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
        <div style={{width:'100%', height:'100vh'}}>


        {/* ნავიგაცია /////////////////////////////////////////// */}
        <nav>
            <div className="nav_left">
                <img src={despoIMG} style={imageStyle} alt='logo'/>
               <Link to="/.Home" style={{textDecoration:'none', color:'unset'}}> <p>Tornike Despotashvili</p></Link>
            </div>

            <div className="nav_right">
                <Link to='./Home' className="navLinks">Back To Home Page</Link>
            </div>

            <div className="burger_menu">
                <img className="menu_bars" src={menuIMG} onClick={()=> toggleMenu()} alt='menu'/>
            </div>
        </nav>

        <div className={dashbrd} onClick={()=> toggleMenu()}>
            <div><Link to='' className="navLinks">Back To Home Page</Link></div>
        </div>

        <div className={overlay} onClick={()=> toggleMenu()}></div>


        <div className="mainScreen">
            <h1>Here You Are!</h1>

            <div className="projects" >
                <div className="projects_inner" id="proj">

                {/* carco პროექტი */}
                <div className="prj">
                    <div className="prj_img">
                            <img className="project_image" src={carco} alt='carco'/>
                    </div>


                    <div className="prj_inner">
                            <h3>Carco.Ge</h3>
                            <p>Yubter is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation.</p>
                            <span className="button_to_cont visitBTN">
                                <span className="button_to_cont_inner" onClick={()=> redirect('https://carco.ge/')}>Visit</span>
                            </span>
                    </div>
                </div>

                {/* 3dlab პოექტი */}
                <div className="prj">
                    <div className="prj_img">
                        <img className="project_image" src={dlab} alt='3dlab'/>
                    </div>


                     <div className="prj_inner">
                        <h3>3dlab.Group</h3>
                        <p>Yubter is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation.</p>
                        <span className="button_to_cont visitBTN">
                             <span className="button_to_cont_inner" onClick={()=> redirect('https://3dlab.group/')}>Visit</span>
                        </span>
                    </div>
                </div>

                {/* nft პროექტი */}
                <div className="prj">
                        <div className="prj_img">
                            <img className="project_image" src={pixnft} alt='nft'/>
                        </div>


                        <div className="prj_inner">
                            <h3>pixNFT.Me</h3>
                            <p>Yubter is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation.</p>
                            <span className="button_to_cont visitBTN">
                                <span className="button_to_cont_inner" onClick={()=> redirect('https://pixnft.me/')}>Visit</span>
                            </span>
                        </div>
                </div>

                {/* ინდიან პროექტი */}
                <div className="prj">
                        <div className="prj_img">
                            <img className="project_image" src={indian} alt='indian'/>
                        </div>


                        <div className="prj_inner">
                            <h2>Moto Shop Clone</h2>
                            <p>Yubter is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation.</p>
                            <span className="button_to_cont visitBTN">
                                <span className="button_to_cont_inner" onClick={()=>redirect('https://desp0o.github.io/IndianMotorcycle/')}>Visit</span>
                            </span>
                        </div>
                </div>

                {/* არქიტექტურა პროექტი */}
                <div className="prj">
                        <div className="prj_img">
                            <img className="project_image" src={archic} alt='archic'/>
                        </div>


                        <div className="prj_inner">
                            <h2>Architect  Clone</h2>
                            <p>Yubter is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation.</p>
                            <span className="button_to_cont visitBTN">
                                <span className="button_to_cont_inner" onClick={()=>redirect('https://desp0o.github.io/IndianMotorcycle/')}>Visit</span>
                            </span>
                        </div>
                </div>

                {/* ჭადრაკი პროექტი */}
                <div className="prj">
                        <div className="prj_img">
                            <img className="project_image" src={chess} alt='chess'/>
                        </div>


                        <div className="prj_inner">
                            <h2>Chess Championship</h2>
                            <p>Yubter is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation.</p>
                            <span className="button_to_cont visitBTN">
                                <span className="button_to_cont_inner" onClick={()=>redirect('https://desp0o.github.io/IndianMotorcycle/')}>Visit</span>
                            </span>
                        </div>
                </div>

                {/* პორტფელი პროექტი */}
                <div className="prj">
                        <div className="prj_img">
                            <img className="project_image" src={portfolio} alt='portfolio'/>
                        </div>


                        <div className="prj_inner">
                            <h2>Devweb.Cc</h2>
                            <p>Yubter is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation.</p>
                            <span className="button_to_cont visitBTN">
                                <span className="button_to_cont_inner" onClick={()=>redirect('https://desp0o.github.io/IndianMotorcycle/')}>Visit</span>
                            </span>
                        </div>
                </div>

                {/* carco APP პროექტი */}
                <div className="prj">
                        <div className="prj_img">
                            <img className="project_image APP" src={calApp} alt='carcoAPP'/>
                        </div>


                        <div className="prj_inner">
                            <h2>Carco.Ge Android APP</h2>
                            <p>Yubter is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation.</p>
                            <span className="button_to_cont visitBTN">
                                <span className="button_to_cont_inner" onClick={()=>redirect('https://desp0o.github.io/IndianMotorcycle/')}>Visit</span>
                            </span>
                        </div>
                </div>




            </div>


           



        </div>
            </div>

        {/* footer ///////////////////// */}
        <div className="footer">
            <div className="footer_top">
                <div className="footer_top_left">
                    <p className="footer_hedaer">TORNIKE DESPOTASHVILI</p>
                    <p className="footer_hedaer_txt" style={{color:'#fff'}}>A Frontend focused Web Developer building the Frontend of Websites and <br/>
                    Web Applications that leads to the success of the overall product</p>
                </div>

                <div className="footer_top_right">
                    <p className="footer_hedaer">SOCIAL</p>
                    <span className="footer_social">
                        <img className="footer_social_img" alt='linked' src={linkedLi} onClick={()=> socialLink("https://www.linkedin.com/in/tornike-despotashvili-250150219/")} />
                        <img className="footer_social_img" alt='twitter' src={twitterLi} onClick={()=> socialLink("https://twitter.com/TDespotashvili")} />
                        <img className="footer_social_img" alt='facebook' src={facebookLi} onClick={()=> socialLink("https://www.facebook.com/tornike.despotashvili/")} />
                        <img className="footer_social_img" alt='github' src={githubLi} onClick={()=> socialLink("https://github.com/Desp0o")} />
                    </span>
                </div>
            </div>

            <div className="footer_bottom">
                <p style={{fontSize:'12px', color:'#fff', textAlign:'center'}}>©Made with love by Tornike Despotashvili</p>
            </div>
        </div>


        </div>
    );
}

export default PagePrj;