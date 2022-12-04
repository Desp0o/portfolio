import {React, useState} from "react";
import {Link} from  "react-router-dom";
import './PROJ_mian_screen.css'
import './project.css'
import './navbar.css'
import './footer.css'
import './res_PROJ.css'

import despoIMG   from './images/despo_img.png'
import menu       from './images/menu.png'
import close      from './images/close.png'
import carco      from './images/carco_prj.png'
import dlab       from './images/3dlab.png'
import pixnft     from './images/pixnft.png'
import indian     from './images/indian.png'
import archic     from './images/archic_prj.png'
import chess      from './images/chess_prj.png'
import portfolio  from './images/portfolio_prj.png'
import calApp     from './images/calculator_app.png'
import nexus      from './images/nexus.png'

const projectArray = [
    {id:1, image:`${carco}`,     title:'Carco.Ge',             description:'Auto import Web page, with transportation and Customs Clearnece calculator.',     button:'Visit',    link:'https://carco.ge/'},
    {id:2, image:`${dlab}`,      title:'3Dlab.Group',          description:'3Dlab is Animation studio, famous in social networks, with its funny projects.',  button:'Visit',    link:'https://3dlab.group/'},
    {id:3, image:`${pixnft}`,    title:'pixnft.me',            description:'NFT project Landing page, with road map and OpenSea account link',                button:'Visit',    link:'https://pixnft.me/'},
    {id:4, image:`${nexus}`,     title:'Nexus Logistic LLC',   description:'Nexus Logistics LLC is a 24/7 delivery/dispatching/carrier company',   button:'Visit',    link:'https://teamofnexus.com/', framework:' React Js.'}, 
    {id:5, image:`${indian}`,    title:'Moto Shop Clone',      description:'Moto shop web page clone, with responsive design and links animation.',           button:'Visit',    link:'https://desp0o.github.io/IndianMotorcycle/'},
    {id:6, image:`${archic}`,    title:'Architect Clone',      description:'Architecutre web page clone, with responsive design and animations.',             button:'Visit',    link:'https://desp0o.github.io/Archic/'},
    {id:7, image:`${chess}`,     title:'Chess Championship',   description:'Chess registration form built with',                                    button:'Visit',    link:'https://desp0o.github.io/RedBeryy-Chess-Hero/', framework:' React Js.'},
    {id:8, image:`${portfolio}`, title:'Devweb.cc',            description:'Super light portfolio web page for Frontend Web Developer, built with', button:'Visit',    link:'https://devweb.cc/', framework:' React Js.'},
    {id:9, image:`${calApp}`,    title:'Carco.Ge Android APP', description:'Auto import Android APP with transportation and Customs Clearnece calculator.',   button:'Download', link:'https://drive.google.com/file/d/13f4GXvhRR9DFW4wAu0RFgsXPmbfm6RKH/view'}

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
        <div style={{width:'100%', height:'100vh'}}>


        {/* ნავიგაცია /////////////////////////////////////////// */}
        <nav>
            <div className="nav_left">
                <img src={despoIMG} style={imageStyle} alt='logo'/>
               <Link to="/HomeENG" style={{textDecoration:'none', color:'unset'}}> <p>Tornike Despotashvili</p></Link>
            </div>

            <div className="nav_right">
                <Link to='/HomeENG' className="navLinks">Back To Home Page</Link>
                <Link to='/redProj' className="navLinks">GEO</Link>
            </div>

            <div className="burger_menu">
                <img className="menu_bars" src={menuIMG} onClick={()=> toggleMenu()} alt='menu'/>
            </div>
        </nav>

        <div className={dashbrd} id="proj_dashboard" onClick={()=> toggleMenu()}>
            <div><Link to='/HomeENG' className="navLinks">Back To Home Page</Link></div>
            <div><Link to='/redProj' className="navLinks">GEO</Link></div>
        </div>

        <div className={overlay} onClick={()=> toggleMenu()}></div>


        <div className="mainScreen">
            <h1 style={{textAlign:'center'}}>Here You Are!</h1>

            <div className="projects" >
                <div className="projects_inner" id="proj">

                {projectArray.map((project, index)=>{
                    return(
                        <div key={index}>
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
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>

        {/* footer ///////////////////// */}
        <div className="footer">
            <div className="footer_top">
                <div className="footer_top_left">
                    <p className="footer_hedaer">Email</p>
                    <p className="footer_hedaer_txt" style={{color:'#fff'}}>info@devweb.cc</p>
                </div>

                <div className="footer_top_right">
                    <p className="footer_hedaer">SOCIAL</p>
                    <span className="footer_social">
                    <svg className="footer_svg" viewBox="0 0 72 72" version="1.1" onClick={()=> socialLink("https://github.com/Desp0o")}>
                        <g id="Page-1" stroke="none" >
                            <g id="Social-Icons---Rounded-Black" transform="translate(-264.000000, -939.000000)">
                                <g id="Github" transform="translate(264.000000, 939.000000)">
                                    <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" id="Rounded" ></path>
                                    <path className="footer_svg_path" d="M35.9985,13 C22.746,13 12,23.7870921 12,37.096644 C12,47.7406712 18.876,56.7718301 28.4145,59.9584121 C29.6145,60.1797862 30.0525,59.4358488 30.0525,58.7973276 C30.0525,58.2250681 30.0315,56.7100863 30.0195,54.6996482 C23.343,56.1558981 21.9345,51.4693938 21.9345,51.4693938 C20.844,48.6864054 19.2705,47.9454799 19.2705,47.9454799 C17.091,46.4500754 19.4355,46.4801943 19.4355,46.4801943 C21.843,46.6503662 23.1105,48.9634994 23.1105,48.9634994 C25.2525,52.6455377 28.728,51.5823398 30.096,50.9649018 C30.3135,49.4077535 30.9345,48.3460615 31.62,47.7436831 C26.2905,47.1352808 20.688,45.0691228 20.688,35.8361671 C20.688,33.2052792 21.6225,31.0547881 23.1585,29.3696344 C22.911,28.7597262 22.0875,26.3110578 23.3925,22.9934585 C23.3925,22.9934585 25.4085,22.3459017 29.9925,25.4632101 C31.908,24.9285993 33.96,24.6620468 36.0015,24.6515052 C38.04,24.6620468 40.0935,24.9285993 42.0105,25.4632101 C46.5915,22.3459017 48.603,22.9934585 48.603,22.9934585 C49.9125,26.3110578 49.089,28.7597262 48.8415,29.3696344 C50.3805,31.0547881 51.309,33.2052792 51.309,35.8361671 C51.309,45.0917119 45.6975,47.1292571 40.3515,47.7256117 C41.2125,48.4695491 41.9805,49.9393525 41.9805,52.1877301 C41.9805,55.4089489 41.9505,58.0067059 41.9505,58.7973276 C41.9505,59.4418726 42.3825,60.1918338 43.6005,59.9554002 C53.13,56.7627944 60,47.7376593 60,37.096644 C60,23.7870921 49.254,13 35.9985,13"></path>
                                </g>
                            </g>
                        </g>
                    </svg>

                    <svg className="footer_svg" viewBox="0 0 72 72" version="1.1" onClick={()=> socialLink("https://www.linkedin.com/in/tornike-despotashvili-250150219/")}>
                        <g id="Page-1" stroke="none"   fillRule="evenodd">
                            <g id="Social-Icons---Rounded-Black" transform="translate(-376.000000, -267.000000)">
                                <g id="Linkedin" transform="translate(376.000000, 267.000000)">
                                    <path  d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" id="Rounded" ></path>
                                    <path className="footer_svg_path" d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"></path>
                                </g>
                            </g>
                        </g>
                    </svg>

                    <svg className="footer_svg" viewBox="0 0 72 72" version="1.1" onClick={()=> socialLink("https://twitter.com/TDespotashvili")}>
                        <g id="Page-1" stroke="none" >
                            <g id="Social-Icons---Rounded" transform="translate(-264.000000, -43.000000)">
                                <g id="Twitter" transform="translate(264.000000, 43.000000)">
                                    <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" id="Rounded" ></path>
                                    <path className="footer_svg_path" d="M55.0865399,25.7148754 C55.7080938,39.5659738 45.3799204,55.0092879 27.0953855,55.0092879 C21.5344243,55.0092879 16.3579537,53.3781513 12,50.5841073 C17.2236474,51.1997641 22.4390388,49.7514374 26.5787999,46.505676 C22.2703818,46.4266549 18.6330532,43.5795371 17.3805101,39.6674038 C18.9231903,39.9622586 20.4411028,39.876161 21.8269202,39.4999263 C17.090373,38.5469556 13.8222026,34.2809966 13.9283503,29.7190034 C15.2563762,30.4561404 16.7754681,30.8996019 18.3900929,30.9491375 C14.0038331,28.0194604 12.7619048,22.2285125 15.3424738,17.8021524 C20.1981424,23.7605779 27.4539289,27.6809671 35.6390977,28.0925844 C34.2037447,21.9312988 38.8766033,16 45.232493,16 C48.0654578,16 50.6247973,17.1947516 52.4198732,19.1089488 C54.6631284,18.6678461 56.7707504,17.8481498 58.6731535,16.7194457 C57.9383754,19.019313 56.3768244,20.9500221 54.3435058,22.1671827 C56.3355447,21.9301194 58.2332301,21.4005602 60,20.6174259 C58.68023,22.592953 57.0101725,24.3266991 55.0865399,25.7148754" fill="#FFFFFF"></path>
                                </g>
                            </g>
                        </g>
                    </svg>

                    <svg className="footer_svg" viewBox="0 0 72 72" version="1.1" onClick={()=> socialLink("https://www.facebook.com/tornike.despotashvili/")}>
                        <g >
                            <g  transform="translate(-152.000000, -43.000000)">
                                <g id="Facebook" transform="translate(152.000000, 43.000000)">
                                    <rect id="Rounded" x="0" y="0" width="72" height="72" rx="8"></rect>
                                    <path className="footer_svg_path" d="M60.4641463,13.4173171 L60.4641463,22.7278049 L54.9382927,22.7421951 C50.6068293,22.7421951 49.7721951,24.8 49.7721951,27.807561 L49.7721951,34.4702439 L60.09,34.4702439 L58.7517073,44.8887805 L49.7721951,44.8887805 L49.7721951,72 L39.0097317,72 L39.0097317,44.8887805 L30,44.8887805 L30,34.4702439 L39.0097317,34.4702439 L39.0097317,26.7858537 C39.0097317,17.8639024 44.4478049,13 52.42,13 C56.2204634,13 59.5,13.2878049 60.4641463,13.4173171 Z" fill="#FFFFFF"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
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