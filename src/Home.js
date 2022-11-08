import {React, useEffect, useState} from "react";
import {useRef} from 'react';
import {Link} from  "react-router-dom";

//CSS
import './home.css'
import './navbar.css'
import './about.css'

//images
import despoIMG from './images/despo_img.png'
import menu from './images/menu.png'
import close from './images/close.png'

const imageStyle = {
    width: '50px',
    borderRadius:'50%'
}

function Home() {
    const [toggle, setToggle]   = useState(false)
    const [menuIMG, setMenuIMG] = useState(menu)
    const [dashbrd, setDashbrd] = useState('menu_dashboard')

    function toggleMenu() {
        if(!toggle){
            setMenuIMG(close)
            setDashbrd('menu_dashboard visible')
            setToggle(true)
        }else{
            setMenuIMG(menu)
            setDashbrd('menu_dashboard')
            setToggle(false)
        }
    }

    const homeRef = useRef(null)
    const handleClick = (refname) => {
        refname.current?.scrollIntoView({behavior: 'smooth'});
      };

    return(
    <div style={{width:'100%', height:'100vh'}}>

        {/* ნავიგაცია /////////////////////////////////////////// */}
        <nav>
            <div className="nav_left">
                <img src={despoIMG} style={imageStyle} />
                <p>Tornike Despotashvili</p>
            </div>

            <div className="nav_right">
                <Link to='' className="navLinks" onClick={()=> handleClick(homeRef)}>Home</Link>
                <Link to='' className="navLinks">About</Link>
                <Link to='' className="navLinks">Projects</Link>
                <Link to='' className="navLinks">Contact</Link>
            </div>

            <div className="burger_menu">
                <img className="menu_bars" src={menuIMG} onClick={()=> toggleMenu()} />
            </div>
        </nav>

        <div className={dashbrd} onClick={()=> toggleMenu()}>
            <div><Link to='' className="navLinks">Home</Link></div>
            <div><Link to='' className="navLinks">About</Link></div>
            <div><Link to='' className="navLinks">Projects</Link></div>
            <div><Link to='' className="navLinks">Contact</Link></div>
        </div>

        {/* ჰიუმ ფეიჯი ////////////////////////////////////////////////////// */}
        <div className="home" ref={homeRef}>
            <h1>HEY, I'M TORNIKE DESPOTASHVILI</h1>

            <div className="home_p_txt">
                <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications <br/> that leads to the success of the overall product</p>
            </div>

            <div className="button_to_prj">
                <div className="button_to_prj_inner">
                    <p>PROJECTS</p>
                </div>
            </div>
        </div>

        <section>
            <div className="about_me">
                <h1 className="about_me_h1">ABOUT ME</h1>
                <span className="underline"></span>

                <div className="about_me_inner">
                    <div className="about_me_inner_left">
                        <h2>Get to know me!</h2>
                        <p>
                        I'm a <b>Frontend Web Developer</b> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.<br/><br/>
                        
                        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                        </p>

                        <div className="button_to_cont">
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
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        
    </div>
    )
}

export default Home;