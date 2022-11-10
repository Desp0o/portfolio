import {React, useState} from "react";
import {useRef} from 'react';
import {Link} from  "react-router-dom";


//CSS
import './home.css'
import './navbar.css'
import './about.css'
import './project.css'
import './contact.css'
import './footer.css'

//images
import despoIMG   from './images/despo_img.png'
import menu       from './images/menu.png'
import close      from './images/close.png'
import carco      from './images/carco_prj.png'
import dlab       from './images/3dlab.png'
import pixnft     from './images/pixnft.png'
import indian     from './images/indian.png'
import linkedin   from './images/linkedin.svg'
import facebook   from './images/facebook.svg'
import github     from './images/github.svg'
import twitter    from './images/twitter.svg'
import linkedLi   from './images/linkedin-light.png'
import twitterLi  from './images/twitter-light.png'
import facebookLi from './images/facebook-light.png'
import githubLi   from './images/github-light.png'

const imageStyle = {
    width: '50px',
    borderRadius:'50%'
}

function Home() {

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

    const homeRef    = useRef(null)
    const aboutRef   = useRef(null)
    const projectRef = useRef(null)
    const contactRef = useRef(null)
    const handleClick = (refname) => {
        refname.current?.scrollIntoView({behavior: 'smooth'});
      };

    const redirect = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }  

    const socialLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return(
    <div style={{width:'100%', height:'100vh'}}>

        {/* ნავიგაცია /////////////////////////////////////////// */}
        <nav>
            <div className="nav_left">
                <img src={despoIMG} style={imageStyle} alt='logo'/>
                <p>Tornike Despotashvili</p>
            </div>

            <div className="nav_right">
                <Link to='' className="navLinks" onClick={()=> handleClick(homeRef)}>Home</Link>
                <Link to='' className="navLinks" onClick={()=> handleClick(aboutRef)}>About</Link>
                <Link to='' className="navLinks" onClick={()=> handleClick(projectRef)}>Projects</Link>
                <Link to='' className="navLinks" onClick={()=> handleClick(contactRef)}>Contact</Link>
                <Link to='/Home' className="navLinks">GEO</Link>
            </div>

            <div className="burger_menu">
                <img className="menu_bars" src={menuIMG} onClick={()=> toggleMenu()} alt='menu'/>
            </div>
        </nav>

        <div className={dashbrd} onClick={()=> toggleMenu()}>
            <div><Link to='' className="navLinks" onClick={()=> handleClick(homeRef)}>Home</Link></div>
            <div><Link to='' className="navLinks" onClick={()=> handleClick(aboutRef)}>About</Link></div>
            <div><Link to='' className="navLinks" onClick={()=> handleClick(projectRef)}>Projects</Link></div>
            <div><Link to='' className="navLinks" onClick={()=> handleClick(contactRef)}>Contact</Link></div>
            <div><Link to='/Home' className="navLinks">GEO</Link></div>
        </div>

        <div className={overlay} onClick={()=> toggleMenu()}></div>

        

        {/* ჰიუმ ფეიჯი ////////////////////////////////////////////////////// */}
        <span ref={homeRef}></span>
        <div className="home" >
            <h1>HEY, I'M TORNIKE DESPOTASHVILI</h1>

            <div className="home_p_txt">
                <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications <br/> that leads to the success of the overall product</p>
             </div>

            <div className="button_to_prj" onClick={()=> handleClick(projectRef)}>
                <div className="button_to_prj_inner">
                    <p>PROJECTS</p>
                </div>
            </div>

            {/* სოციალური ქსელები */}
            <span className="social">
                <img className="social_img" alt='linkedin' src={linkedin} onClick={()=> socialLink("https://www.linkedin.com/in/tornike-despotashvili-250150219/")} />
                <img className="social_img" alt='twitter' src={twitter} onClick={()=> socialLink("https://twitter.com/TDespotashvili")} />
                <img className="social_img" alt='facebook' src={facebook} onClick={()=> socialLink("https://www.facebook.com/tornike.despotashvili/")} />
                <img className="social_img" alt='github' src={github} onClick={()=> socialLink("https://github.com/Desp0o")} />
            </span>
            
        </div>

        {/* ებაუთ ფეიჯი ////////////////////////////////////////////////////// */}
        <span ref={aboutRef}></span>
        <div className="about_me" >
                <h1 className="about_me_h1">ABOUT ME</h1>
                <span className="underline"></span>

                <div className="about_me_inner">
                    <div className="about_me_inner_left">
                        <h2>Get to know me!</h2>
                        <p>
                        I'm a <b>Frontend Web Developer</b> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.<br/><br/>
                        
                        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                        </p>

                        <div className="button_to_cont" onClick={()=> handleClick(contactRef)}>
                            <div className="button_to_cont_inner">
                                <p>CONTACT</p>
                        </div>
            </div>
                    </div>
                    
                    <div className="about_me_inner_right">
                        <h2>My Skills!</h2>

                        <div className="my_skills">
                            <span className="skill">HTML</span>
                            <span className="skill">CSS</span>
                            <span className="skill">SASS</span>
                            <span className="skill">SCSS</span>
                        </div>

                        <div className="my_skills">
                            <span className="skill">Javascript</span>
                            <span className="skill">React</span>
                            <span className="skill">Responsive Design</span>
                            <span className="skill">Github</span>
                        </div>

                        <div className="my_skills">
                            <span className="skill">Git</span>
                            <span className="skill">JQuery</span>
                            <span className="skill">Docker</span>
                            <span className="skill">webView</span> 
                        </div>

                        
                    </div>
                </div>
        </div>
            
        {/* პროექტები ფეიჯი ////////////////////////////////////////////////////// */}
        <span ref={projectRef}></span>
        <div className="projects" >
                <div className="header_underline">
                    <h1 className="about_me_h1">PROJECTS</h1>
                    <span className="underline"></span>
                </div>

            <div className="projects_inner">

                <div className="prj">
                        <div className="prj_img">
                            <img className="project_image" src={carco} alt='carco'/>
                        </div>


                        <div className="prj_inner">
                            <h3>Carco.Ge</h3>
                            <p>Auto import Web page, with transportation and Customs Clearnece calculator.  </p>
                            <span className="button_to_cont visitBTN">
                                <span className="button_to_cont_inner" onClick={()=> redirect('https://carco.ge/')}>Visit</span>
                            </span>
                        </div>
                </div>

                <div className="prj">
                        <div className="prj_img">
                            <img className="project_image" src={dlab} alt='3dlab'/>
                        </div>


                        <div className="prj_inner">
                            <h3>3dlab.Group</h3>
                            <p>3Dlab is Animation studio, famous in social networks, with its funny projects</p>
                            <span className="button_to_cont visitBTN">
                                <span className="button_to_cont_inner" onClick={()=> redirect('https://3dlab.group/')}>Visit</span>
                            </span>
                        </div>
                </div>

                <div className="prj">
                        <div className="prj_img">
                            <img className="project_image" src={pixnft} alt='nft'/>
                        </div>


                        <div className="prj_inner">
                            <h3>pixNFT.Me</h3>
                            <p>NFT project Landing page, with road map and OpenSea's account link</p>
                            <span className="button_to_cont visitBTN">
                                <span className="button_to_cont_inner" onClick={()=> redirect('https://pixnft.me/')}>Visit</span>
                            </span>
                        </div>
                </div>

                <div className="prj">
                        <div className="prj_img">
                            <img className="project_image" src={indian} alt='indian'/>
                        </div>


                        <div className="prj_inner">
                            <h2>Moto Shop Clone</h2>
                            <p>Moto shop web page clone, with responsive navbar and links animation</p>
                            <span className="button_to_cont visitBTN">
                                <span className="button_to_cont_inner" onClick={()=>redirect('https://desp0o.github.io/IndianMotorcycle/')}>Visit</span>
                            </span>
                        </div>
                </div>

            </div>


            <span className="button_to_cont seeMore">
               <Link style={{textDecoration:'none'}} to="./ProjENG"><span className="button_to_cont_inner seeMoteBTN" >See More Projects</span></Link>
            </span>



        </div>

        {/* კონტაქტი ///////////////////////////////////////////////////////////*/}
        <span ref={contactRef}></span>
        <div className="contact" >
            <div className="contact_header">
                <h1 className="about_me_h1">CONTACT</h1>
                <span className="underline"></span>
                <p style={{textAlign:'center', marginTop:'20px'}}>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
            </div>

        <div className="form_parent">
            <form action="https://formsubmit.co/8e6d01b034a735685229e1724634d364" method="POST">
                <input className="simpleInput" type="text" name="name" placeholder="Name" required />
                <input className="simpleInput" type="email" name="email" placeholder="Email" required />
                <input className="simpleInput" type="text" name="number" placeholder="Number" required />
                <input className="textarea" type="text" name="message" placeholder="Your Text" required />
                <input type="hidden" name="_next" value="https://devweb.cc/#/HomeENG" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="button_to_cont submit_parent">
                    <button className="submitBTN button_to_cont_inner" type="submit">Send</button>
                </div>
            </form>
        </div>

        </div>

        {/* footer //////////////////////////////////////////////////////////// */}
        <div className="footer">
            <div className="footer_top">
                <div className="footer_top_left">
                    <p className="footer_hedaer">Email</p>
                    <p className="footer_hedaer_txt" style={{color:'#fff'}}>info@devweb.cc</p>
                </div>

                <div className="footer_top_right">
                    <p className="footer_hedaer">SOCIAL</p>
                    <span className="footer_social">
                        <img className="footer_social_img" alt="linkedin" src={linkedLi} onClick={()=> socialLink("https://www.linkedin.com/in/tornike-despotashvili-250150219/")} />
                        <img className="footer_social_img" alt="twitter" src={twitterLi} onClick={()=> socialLink("https://twitter.com/TDespotashvili")} />
                        <img className="footer_social_img" alt="facebook" src={facebookLi} onClick={()=> socialLink("https://www.facebook.com/tornike.despotashvili/")} />
                        <img className="footer_social_img" alt="github" src={githubLi} onClick={()=> socialLink("https://github.com/Desp0o")} />
                    </span>
                </div>
            </div>

            <div className="footer_bottom">
                <p style={{fontSize:'12px', color:'#fff', textAlign:'center'}}>©Made with love by Tornike Despotashvili</p>
            </div>
        </div>

    </div>
    )
}

export default Home;


    