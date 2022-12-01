import {React, useState} from "react";
import {useRef} from 'react';
import {Link} from  "react-router-dom";
import emailjs from '@emailjs/browser';


//CSS
import './home.css'
import './navbar.css'
import './about.css'
import './project.css'
import './contact.css'
import './footer.css'
import './georgian.css'
import './index.css'

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
import bulb       from './images/bulb.png' 


const imageStyle = {
    width: '50px',
    borderRadius:'50%'
}

function Home() {

    const [toggle, setToggle]   = useState(false)
    const [menuIMG, setMenuIMG] = useState(menu)
    const [dashbrd, setDashbrd] = useState('menu_dashboard')
    const [overlay, setOverlay] = useState('overlay')
    const [mode, setMode]       = useState(bulb)

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


    const form       = useRef()
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

    const sendEmail =(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_bpng7e7', 'template_y2xffsh', form.current, 'k5sgg72-uloGuXB_E')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return(
    <div className="geoStyle app">

        {/* ნავიგაცია /////////////////////////////////////////// */}
        <nav>
            <div className="nav_left">
                <img src={despoIMG} style={imageStyle} alt='logo'/>
                <p>თორნიკე დესპოტაშვილი</p>
            </div>

            <div className="nav_right">
                <Link to='' className="navLinks" onClick={()=> handleClick(homeRef)}>მთავარი</Link>
                <Link to='' className="navLinks" onClick={()=> handleClick(aboutRef)}>შესახებ</Link>
                <Link to='' className="navLinks" onClick={()=> handleClick(projectRef)}>პროექტები</Link>
                <Link to='' className="navLinks" onClick={()=> handleClick(contactRef)}>კონტაქტი</Link>
                <Link to='./HomeENG' className="navLinks">ENG</Link>
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
            <div><Link to='/HomeENG' className="navLinks">ENG</Link></div>
        </div>

        <div className={overlay} onClick={()=> toggleMenu()}></div>

        

        {/* ჰიუმ ფეიჯი ////////////////////////////////////////////////////// */}
        <span ref={homeRef}></span>
        <div className="home" >
            

            

            <div className="home_p_txt">
                <h1 className="breckets"> {'<'}{'/'}{'>'}</h1>
             </div>

            <div className="button_to_prj" onClick={()=> handleClick(projectRef)}>
                <div className="button_to_prj_inner">
                    <p>პროექტები</p>
                </div>
            </div>

            {/* <div className="modes">
                <Link to='/darkmode/homdeDark'><img src={mode} alt="mode"/></Link>
            </div> */}

            {/* სოციალური ქსელები */}
            <span className="social">
                <img className="social_img" alt='linkedin' src={linkedin} onClick={()=> socialLink("https://www.linkedin.com/in/tornike-despotashvili-250150219/")} />
                <img className="social_img" alt='twitter' src={twitter} onClick={()=> socialLink("https://twitter.com/TDespotashvili")} />
                <img className="social_img" alt='facebook' src={facebook} onClick={()=> socialLink("https://www.facebook.com/tornike.despotashvili/")} />
                <img className="social_img" alt='github' src={github} onClick={()=> socialLink("https://github.com/Desp0o")} />
            </span>
            
        </div>

        {/* ებაუთ ფეიჯი ////////////////////////////////////////////////////// */}
        <div ref={aboutRef}></div>
        <div className="about_me" >
                <h1 className="about_me_h1">ჩემ შესახებ</h1>
                <span className="underline"></span>

                <div className="about_me_inner">
                    <div className="about_me_inner_left">
                        
                        <p>
                        მე ვარ,თორნიკე დესპორაშვილი <b>Frontend</b> -ზე ფოკუსირებული ვებ დეველოპერი. ვაწყობ ვებ-გვერდებს, რომელიც დღეს ერთ-ერთი  ყველაზე მნიშვნელოვანი საფეხურია ბიზნესის წარმატებისთვის.<br/><br/>
                        
                        მზად ვარ ახალი,საინტერესო გამოწვევებისთვის,ახალი პროექტებისთვის და თუ  კი ხარ ის,ვისაც აქვს ინოვაციური,საინტერესო პროექტი სიამოვნებით ვითანამშრომლებ თქვენთან.
                        </p>

                        <div className="button_to_cont" onClick={()=> handleClick(contactRef)}>
                            <div className="button_to_cont_inner">
                                <p>კონტაქტი</p>
                        </div>
            </div>
                    </div>
                    
                    <div className="about_me_inner_right">
                        <h2>უნარები!</h2>

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
                    <h1 className="about_me_h1">პროექტები</h1>
                    <span className="underline"></span>
                </div>

            <div className="projects_inner">

                <div className="prj">
                        <div className="prj_img">
                            <img className="project_image" src={carco} alt='carco'/>
                        </div>


                        <div className="prj_inner">
                            <h3>Carco.Ge</h3>
                            <p>ავტო იმპორტის ვებ-გვერდი,ტრანსპორტირებისა და განბაჟების კალკულატორით.</p>
                            <span className="button_to_cont visitBTN">
                                <span className="button_to_cont_inner" onClick={()=> redirect('https://carco.ge/')}>ნახვა</span>
                            </span>
                        </div>
                </div>

                <div className="prj">
                        <div className="prj_img">
                            <img className="project_image" src={dlab} alt='3dlab'/>
                        </div>


                        <div className="prj_inner">
                            <h3>3dlab.Group</h3>
                            <p>ანიმაციური სტუდია, რომელიც ქმნის სხვადასხვა ტიპის 3D სარეკლამო ანიმაციებს კომპანიებისთვის. 3D ლაბი ცნობილია მისი სახალისო კონტენტით სხვადასხვა სოციალურ ქსელში.</p>
                            <span className="button_to_cont visitBTN">
                                <span className="button_to_cont_inner" onClick={()=> redirect('https://3dlab.group/')}>ნახვა</span>
                            </span>
                        </div>
                </div>

                <div className="prj">
                        <div className="prj_img">
                            <img className="project_image" src={pixnft} alt='nft'/>
                        </div>


                        <div className="prj_inner">
                            <h3>pixNFT.Me</h3>
                            <p>NFT ვებ-გვერდი, ინოვაციური გეგმებით. </p>
                            <span className="button_to_cont visitBTN">
                                <span className="button_to_cont_inner" onClick={()=> redirect('https://pixnft.me/')}>ნახვა</span>
                            </span>
                        </div>
                </div>

                <div className="prj">
                        <div className="prj_img">
                            <img className="project_image" src={indian} alt='indian'/>
                        </div>


                        <div className="prj_inner">
                            <h2>Moto Shop Clone</h2>
                            <p>მოტოციკლეტების მაღაზიის პროექტი</p>
                            <span className="button_to_cont visitBTN">
                                <span className="button_to_cont_inner" onClick={()=>redirect('https://desp0o.github.io/IndianMotorcycle/')}>ნახვა</span>
                            </span>
                        </div>
                </div>

            </div>


            <span className="button_to_cont seeMore">
               <Link style={{textDecoration:'none'}} to="/redProj"><span className="button_to_cont_inner seeMoteBTN" >მეტი პროექტი</span></Link>
            </span>



        </div>

        {/* კონტაქტი ///////////////////////////////////////////////////////////*/}
        <span ref={contactRef}></span>
        <div className="contact" >
            <div className="contact_header">
                <h1 className="about_me_h1">კონტაქტი</h1>
                <span className="underline"></span>
                <p className="geoContact" style={{textAlign:'center', marginTop:'20px'}}>დასაკონტაქტებლად შეავსეთ ქვემოთ მოცემული ველები და შეძლებისდგავარად სწრაფად მიიღებთ პასუხს</p>
            </div>

        <div className="form_parent">
        <form ref={form} onSubmit={sendEmail} >
                <input className="simpleInput geoStyle" type="text" name="name" placeholder="სახელი" required />
                <input className="simpleInput geoStyle" type="email" name="email" placeholder="ელ. ფოსტა" required />
                <input className="simpleInput geoStyle" type="text" name="number" placeholder="ნომერი" required />
                <input className="textarea geoStyle" type="text" name="message" placeholder="თქვენი ტექსტი" required />
                <div className="button_to_cont submit_parent">
                    <button className="submitBTN button_to_cont_inner geoStyle" type="submit">გაგზავნა</button>
                </div>
            </form>
        </div>

        </div>

        {/* footer //////////////////////////////////////////////////////////// */}
        <div className="footer">
            <div className="footer_top">
                <div className="footer_top_left">
                    <p className="footer_hedaer geoStyle">ელ. ფოსტა</p>
                    <p className="footer_hedaer_txt" style={{color:'#fff'}}>info@devweb.cc</p>
                </div>

                <div className="footer_top_right">
                    <p className="footer_hedaer geoStyle">ქსელები</p>
                    <span className="footer_social">
                        <img className="footer_social_img" alt="linkedin" src={linkedLi} onClick={()=> socialLink("https://www.linkedin.com/in/tornike-despotashvili-250150219/")} />
                        <img className="footer_social_img" alt="twitter" src={twitterLi} onClick={()=> socialLink("https://twitter.com/TDespotashvili")} />
                        <img className="footer_social_img" alt="facebook" src={facebookLi} onClick={()=> socialLink("https://www.facebook.com/tornike.despotashvili/")} />
                        <img className="footer_social_img" alt="github" src={githubLi} onClick={()=> socialLink("https://github.com/Desp0o")} />
                    </span>
                </div>
            </div>

            <div className="footer_bottom">
                <p style={{fontSize:'12px', color:'#fff', textAlign:'center'}}>©თორნიკე დესპოტაშვილი</p>
            </div>
        </div>

    </div>
    )
}

export default Home;


    