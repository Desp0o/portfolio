import {React, useEffect, useState} from "react";
import {useRef} from 'react';
import {Link} from  "react-router-dom";
import emailjs from '@emailjs/browser';
import Footer from "./components/footer/footer";
import { projectDB } from "./projectDB";


//CSS
import './styles/home.css'
import './styles/navbar.css'
import './styles/about.css'
import './components/Projects/project.css'
import './styles/contact.css'
import './index.css'

//images
import despoIMG   from './images/despo_img_512.webp'
import menu       from './images/menu.png'
import close      from './images/close.png'


const imageStyle = {
    width: '50px',
    borderRadius:'50%'
}

function Home() {
    const [isEng, setIsEng]     = useState(false)
    const [toggle, setToggle]   = useState(false)
    const [menuIMG, setMenuIMG] = useState(menu)
    const [dashbrd, setDashbrd] = useState('menu_dashboard')
    const [overlay, setOverlay] = useState('overlay')

    const navbarTitleHref    = useRef()
    const navHomeRef         = useRef()
    const projBtnRef         = useRef()
    const navAboutRef        = useRef()
    const navProjRef         = useRef()
    const navContRef         = useRef()
    const burgerMain         = useRef()
    const burgerAbout        = useRef()
    const burgerProj         = useRef()
    const burgerCont         = useRef()
    const aboutMeTitle       = useRef()
    const aboutMeParag       = useRef()
    const aboutMeSkill       = useRef()
    const aboutMeBtn         = useRef()
    const projTitleRef       = useRef()
    const seeMoreBtnBlackRef = useRef()
    const contactTitleRef    = useRef()
    const contactParRef      = useRef()
    const contactSendBtnRef  = useRef()
    
    const inputName          = useRef()
    const inputMail          = useRef()
    const inputNumber        = useRef()
    const inputText          = useRef()
    const navLanguageEng     = useRef()
    const navLanguageGeo     = useRef()
    const burgerLanguageEng  = useRef()
    const burgerLanguageGeo  = useRef()

    
    const form       = useRef()
    const homeRef    = useRef(null)
    const aboutRef   = useRef(null)
    const projectRef = useRef(null)
    const contactRef = useRef(null)

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

    function engLang() {
        localStorage.setItem("language", "eng");
        setIsEng(true)
    }

    function geoLang() {
        localStorage.setItem("language", "geo");
        setIsEng(false)
    }

    const lg = localStorage.getItem('language');

    useEffect(()=>{
        navLanguageGeo.current.style.display = 'none'
        burgerLanguageGeo.current.style.display = 'none'
        inputName.current.placeholder = 'სახელი'
        inputMail.current.placeholder = 'ელფოსტა'
        inputNumber.current.placeholder = 'ნომერი'
        inputText.current.placeholder = 'თქვენი შეტყობინება'
        navbarTitleHref.current.innerHTML = 'თორნიკე დესპოტაშვილი'
        navHomeRef.current.innerHTML = 'მთავარი'
        navAboutRef.current.innerHTML = 'შესახებ'
        navProjRef.current.innerHTML = 'პროექტები'
        navContRef.current.innerHTML = 'კონტაქტი'
        burgerMain.current.innerHTML = 'მთავარი'
        burgerAbout.current.innerHTML = 'შესახებ'
        burgerProj.current.innerHTML = 'პროექტები'
        burgerCont.current.innerHTML = 'კონტაქტი'
        projBtnRef.current.innerHTML = 'პროექტები'
        aboutMeTitle.current.innerHTML = 'ჩემ შესახებ'
        aboutMeParag.current.innerHTML = 'მე ვარ,თორნიკე დესპორაშვილი Front-End -ზე ფოკუსირებული ვებ დეველოპერი. ვაწყობ ვებ-გვერდებს, რომელიც დღეს ერთ-ერთი  ყველაზე მნიშვნელოვანი საფეხურია ბიზნესის წარმატებისთვის.<br/><br/> მზად ვარ ახალი,საინტერესო გამოწვევებისთვის,ახალი პროექტებისთვის და თუ  კი ხარ ის,ვისაც აქვს ინოვაციური,საინტერესო პროექტი სიამოვნებით ვითანამშრომლებ თქვენთან.'
        aboutMeSkill.current.innerHTML = 'უნარები!'
        aboutMeBtn.current.innerHTML = 'კონტაქტი'
        projTitleRef.current.innerHTML = 'პროექტები'
        seeMoreBtnBlackRef.current.innerHTML = 'მეტი პროექტი'
        contactTitleRef.current.innerHTML = 'კონტაქტი'
        contactParRef.current.innerHTML = 'დასაკონტაქტებლად შეავსეთ ქვემოთ მოცემული ველები და შეძლებისდგავარად სწრაფად მიიღებთ პასუხს'
        contactSendBtnRef.current.innerHTML = 'გაგზავნა'
        navLanguageEng.current.style.display = 'block'
        navLanguageGeo.current.style.display = 'none'
        burgerLanguageEng.current.style.display = 'flex'
        burgerLanguageGeo.current.style.display = 'none'
        setIsEng(false);

         if(lg === 'eng') {
            setIsEng(true);
             navbarTitleHref.current.innerHTML = 'tornike despotashvili';
             navHomeRef.current.innerHTML = 'Home'
             navAboutRef.current.innerHTML = 'About'
             navProjRef.current.innerHTML = 'Projects'
             navContRef.current.innerHTML = 'Contact'
             burgerMain.current.innerHTML = 'Home'
             burgerAbout.current.innerHTML = 'About'
             burgerProj.current.innerHTML = 'Projects'
             burgerCont.current.innerHTML = 'Contact'
             projBtnRef.current.innerHTML = 'PROJECTS'
             aboutMeTitle.current.innerHTML = 'ABOUT ME'
             aboutMeParag.current.innerHTML = 'Im a Frontend Web Developer building the Front-End of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.<br/><br/> Im open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then dont hesitate to contact me.'
             aboutMeSkill.current.innerHTML = 'Skills!'
             aboutMeBtn.current.innerHTML = 'CONTACT'
             projTitleRef.current.innerHTML = 'PROJECTS'
             seeMoreBtnBlackRef.current.innerHTML = 'See More Projects'
             contactTitleRef.current.innerHTML = 'CONTACT'
             contactParRef.current.innerHTML = 'Feel free to Contact me by submitting the form below and I will get back to you as soon as possible'
             contactSendBtnRef.current.innerHTML = 'Send'
             inputName.current.placeholder = 'Name'
             inputMail.current.placeholder = 'Email'
             inputNumber.current.placeholder = 'Number'
             inputText.current.placeholder = 'Your Message'
             navLanguageEng.current.style.display = 'none'
             navLanguageGeo.current.style.display = 'block'
             burgerLanguageEng.current.style.display = 'none'
             burgerLanguageGeo.current.style.display = 'flex'

        }
    },[isEng])


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

        {/* <Opening /> */}

        {/* ნავიგაცია /////////////////////////////////////////// */}
        <nav>
            <div className="nav_left">
                <img src={despoIMG} style={imageStyle} alt='logo'/>
                <p ref={navbarTitleHref}></p>
            </div>

            <div className="nav_right">
                <Link to='' className="navLinks" onClick={()=> handleClick(homeRef)} ref={navHomeRef}></Link>
                <Link to='' className="navLinks" onClick={()=> handleClick(aboutRef)} ref={navAboutRef}></Link>
                <Link to='/Projects' className="navLinks"ref={navProjRef}></Link>
                <Link to='' className="navLinks" onClick={()=> handleClick(contactRef)} ref={navContRef}></Link>
                <Link to='' className="navLinks" ref={navLanguageEng} onClick={()=> engLang()}>ENG</Link>
                <Link to='' className="navLinks" ref={navLanguageGeo} onClick={()=> geoLang()}>GEO</Link>
            </div>

            <div className="burger_menu">
                <img className="menu_bars" src={menuIMG} onClick={()=> toggleMenu()} alt='menu'/>
            </div>
        </nav>

        <div className={dashbrd} onClick={()=> toggleMenu()}>
            <div><Link to='' className="navLinks" onClick={()=> handleClick(homeRef)} ref={burgerMain}></Link></div>
            <div><Link to='' className="navLinks" onClick={()=> handleClick(aboutRef)} ref={burgerAbout}></Link></div>
            <div><Link to='/Projects' className="navLinks" onClick={()=> handleClick(projectRef)} ref={burgerProj}></Link></div>
            <div><Link to='' className="navLinks" onClick={()=> handleClick(contactRef)} ref={burgerCont}></Link></div>
            <div ref={burgerLanguageEng}><Link to='' className="navLinks" onClick={()=> engLang()}>ENG</Link></div>
            <div ref={burgerLanguageGeo}><Link to='' className="navLinks" onClick={()=> geoLang()}>GEO</Link></div>
        </div>

        <div className={overlay} onClick={()=> toggleMenu()}></div>

        

        {/* ჰიუმ ფეიჯი ////////////////////////////////////////////////////// */}
        <span ref={homeRef}></span>
        <div className="home">
            

            

            <div className="home_p_txt">
                <h1 className="breckets"> {'<'}{'/'}{'>'}</h1>
             </div>

            <div className="button_to_prj" onClick={()=> handleClick(projectRef)} style={{width:'fit-content'}}>
                <div className="button_to_prj_inner">
                    <p ref={projBtnRef}></p>
                </div>
            </div>

            {/* <div className="modes">
                <Link to='/darkmode/homdeDark'><img src={mode} alt="mode"/></Link>
            </div> */}

            {/* სოციალური ქსელები */}
            <span className="social">

            <svg className="social_img" viewBox="0 0 72 72" version="1.1" onClick={()=> socialLink("https://github.com/Desp0o")}>
                <g id="Page-1" stroke="none" >
                    <g id="Social-Icons---Rounded-Black" transform="translate(-264.000000, -939.000000)">
                        <g id="Github" transform="translate(264.000000, 939.000000)">
                            <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" id="Rounded" ></path>
                            <path className="svg_path" d="M35.9985,13 C22.746,13 12,23.7870921 12,37.096644 C12,47.7406712 18.876,56.7718301 28.4145,59.9584121 C29.6145,60.1797862 30.0525,59.4358488 30.0525,58.7973276 C30.0525,58.2250681 30.0315,56.7100863 30.0195,54.6996482 C23.343,56.1558981 21.9345,51.4693938 21.9345,51.4693938 C20.844,48.6864054 19.2705,47.9454799 19.2705,47.9454799 C17.091,46.4500754 19.4355,46.4801943 19.4355,46.4801943 C21.843,46.6503662 23.1105,48.9634994 23.1105,48.9634994 C25.2525,52.6455377 28.728,51.5823398 30.096,50.9649018 C30.3135,49.4077535 30.9345,48.3460615 31.62,47.7436831 C26.2905,47.1352808 20.688,45.0691228 20.688,35.8361671 C20.688,33.2052792 21.6225,31.0547881 23.1585,29.3696344 C22.911,28.7597262 22.0875,26.3110578 23.3925,22.9934585 C23.3925,22.9934585 25.4085,22.3459017 29.9925,25.4632101 C31.908,24.9285993 33.96,24.6620468 36.0015,24.6515052 C38.04,24.6620468 40.0935,24.9285993 42.0105,25.4632101 C46.5915,22.3459017 48.603,22.9934585 48.603,22.9934585 C49.9125,26.3110578 49.089,28.7597262 48.8415,29.3696344 C50.3805,31.0547881 51.309,33.2052792 51.309,35.8361671 C51.309,45.0917119 45.6975,47.1292571 40.3515,47.7256117 C41.2125,48.4695491 41.9805,49.9393525 41.9805,52.1877301 C41.9805,55.4089489 41.9505,58.0067059 41.9505,58.7973276 C41.9505,59.4418726 42.3825,60.1918338 43.6005,59.9554002 C53.13,56.7627944 60,47.7376593 60,37.096644 C60,23.7870921 49.254,13 35.9985,13"></path>
                        </g>
                    </g>
                </g>
            </svg>

            <svg className="social_img" viewBox="0 0 72 72" version="1.1" onClick={()=> socialLink("https://www.linkedin.com/in/tornike-despotashvili-250150219/")}>
                <g id="Page-1" stroke="none"   fillRule="evenodd">
                    <g id="Social-Icons---Rounded-Black" transform="translate(-376.000000, -267.000000)">
                        <g id="Linkedin" transform="translate(376.000000, 267.000000)">
                            <path  d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" id="Rounded" ></path>
                            <path className="svg_path" d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"></path>
                        </g>
                    </g>
                </g>
            </svg>
     
            <svg className="social_img" viewBox="0 0 72 72" version="1.1" onClick={()=> socialLink("https://twitter.com/TDespotashvili")}>
                <g id="Page-1" stroke="none" >
                    <g id="Social-Icons---Rounded" transform="translate(-264.000000, -43.000000)">
                        <g id="Twitter" transform="translate(264.000000, 43.000000)">
                            <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" id="Rounded" ></path>
                            <path className="svg_path" d="M55.0865399,25.7148754 C55.7080938,39.5659738 45.3799204,55.0092879 27.0953855,55.0092879 C21.5344243,55.0092879 16.3579537,53.3781513 12,50.5841073 C17.2236474,51.1997641 22.4390388,49.7514374 26.5787999,46.505676 C22.2703818,46.4266549 18.6330532,43.5795371 17.3805101,39.6674038 C18.9231903,39.9622586 20.4411028,39.876161 21.8269202,39.4999263 C17.090373,38.5469556 13.8222026,34.2809966 13.9283503,29.7190034 C15.2563762,30.4561404 16.7754681,30.8996019 18.3900929,30.9491375 C14.0038331,28.0194604 12.7619048,22.2285125 15.3424738,17.8021524 C20.1981424,23.7605779 27.4539289,27.6809671 35.6390977,28.0925844 C34.2037447,21.9312988 38.8766033,16 45.232493,16 C48.0654578,16 50.6247973,17.1947516 52.4198732,19.1089488 C54.6631284,18.6678461 56.7707504,17.8481498 58.6731535,16.7194457 C57.9383754,19.019313 56.3768244,20.9500221 54.3435058,22.1671827 C56.3355447,21.9301194 58.2332301,21.4005602 60,20.6174259 C58.68023,22.592953 57.0101725,24.3266991 55.0865399,25.7148754" fill="#FFFFFF"></path>
                        </g>
                    </g>
                </g>
            </svg>

            <svg className="social_img" viewBox="0 0 72 72" version="1.1" onClick={()=> socialLink("https://www.facebook.com/tornike.despotashvili/")}>
                <g >
                    <g  transform="translate(-152.000000, -43.000000)">
                        <g id="Facebook" transform="translate(152.000000, 43.000000)">
                            <rect id="Rounded" x="0" y="0" width="72" height="72" rx="8"></rect>
                            <path className="svg_path" d="M60.4641463,13.4173171 L60.4641463,22.7278049 L54.9382927,22.7421951 C50.6068293,22.7421951 49.7721951,24.8 49.7721951,27.807561 L49.7721951,34.4702439 L60.09,34.4702439 L58.7517073,44.8887805 L49.7721951,44.8887805 L49.7721951,72 L39.0097317,72 L39.0097317,44.8887805 L30,44.8887805 L30,34.4702439 L39.0097317,34.4702439 L39.0097317,26.7858537 C39.0097317,17.8639024 44.4478049,13 52.42,13 C56.2204634,13 59.5,13.2878049 60.4641463,13.4173171 Z" fill="#FFFFFF"></path>
                        </g>
                    </g>
                </g>
            </svg>

            </span>
            
        </div>

        {/* ებაუთ ფეიჯი ////////////////////////////////////////////////////// */}
        <div ref={aboutRef}></div>
        <div className="about_me" >
                <h1 className="about_me_h1" ref={aboutMeTitle}></h1>
                <span className="underline"></span>

                <div className="about_me_inner">
                    <div className="about_me_inner_left">
                        
                        <p ref={aboutMeParag}></p>

                        <div className="button_to_cont" onClick={()=> handleClick(contactRef)}>
                            <div className="button_to_cont_inner">
                                <p ref={aboutMeBtn}></p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="about_me_inner_right">
                        <h2 ref={aboutMeSkill}></h2>

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
                    <h1 className="about_me_h1" ref={projTitleRef}></h1>
                    <span className="underline"></span>
                </div>

            <div className="projects_inner">

            {/* პროექტების მაპინგი */}
            {projectDB.map((project)=>{
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
                                    <span className='button_to_cont_inner' onClick={()=> redirect(project.link)}>
                                    {localStorage.language === 'eng' ? `${project.buttonEng}` : `${project.button}`}
                                    </span>
                                </span>
                            </div>
                        </div>
                        </div>
                    )
                })}

            </div>


            <span className="button_to_cont seeMore">
               <Link style={{textDecoration:'none'}} to="/Projects"><span ref={seeMoreBtnBlackRef} className="button_to_cont_inner seeMoteBTN" ></span></Link>
            </span>



        </div>

        {/* კონტაქტი ///////////////////////////////////////////////////////////*/}
        <span ref={contactRef}></span>
        <div className="contact" >
            <div className="contact_header">
                <h1 className="about_me_h1" ref={contactTitleRef}></h1>
                <span className="underline"></span>
                <p className="geoContact" style={{textAlign:'center', marginTop:'20px'}} ref={contactParRef}></p>
            </div>

        <div className="form_parent">
        <form ref={form} onSubmit={sendEmail} >
                <input ref={inputName} className="simpleInput geoStyle" type="text" name="name"  required />
                <input ref={inputMail} className="simpleInput geoStyle" type="email" name="email" required />
                <input ref={inputNumber} className="simpleInput geoStyle" type="text" name="number"  required />
                <input ref={inputText} className="textarea geoStyle" type="text" name="message"  required />
    
                <div className="button_to_cont submit_parent">
                    <button className="submitBTN button_to_cont_inner geoStyle" type="submit" ref={contactSendBtnRef}></button>
                </div>
            </form>
        </div>

        </div>

        {/* footer //////////////////////////////////////////////////////////// */}

        <Footer iseng={isEng}/>

    </div>
    )
}

export default Home;


    