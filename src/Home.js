import {React, useEffect} from "react";
import {useRef, useContext} from 'react';
import { langContext } from "./components/context";
import {Link} from  "react-router-dom";
import emailjs from '@emailjs/browser';
import Footer from "./components/footer/footer";
import { projectDB } from "./projectDB";
import toast, { Toaster } from 'react-hot-toast';
import Navbar from "./components/navbar/navbar";
import SVG from "./components/SVG";

//CSS
import './styles/home.css'
import './styles/about.css'
import './components/Projects/project.css'
import './styles/contact.css'
import './index.css'
import SocialLinks from "./components/SocialLinks";


function Home(props) {
    const {isEng} = useContext(langContext)

    const button = useRef()
    const projBtnRef         = useRef()
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
    const form               = useRef()
    const homeRef            = useRef(null)
    const projectRef         = useRef(null)
    const contactRef         = useRef(null)

    const lg = localStorage.getItem('language');

    const message = lg === 'eng' ? "Message Is Sent!" : "თქვენი წერილი გაგზავნილია!"
    const notify = () => toast(message,{
        icon: '✉️',
    });

    useEffect(()=>{

        
        
            projBtnRef.current.innerText = 'პროექტები'
            aboutMeTitle.current.innerText = 'ჩემ შესახებ'
            aboutMeParag.current.innerHTML = 'მე ვარ,თორნიკე დესპოტაშვილი Front-End -ზე ფოკუსირებული ვებ დეველოპერი. ვაწყობ ვებ-გვერდებს, რომელიც დღეს ერთ-ერთი  ყველაზე მნიშვნელოვანი საფეხურია ბიზნესის წარმატებისთვის.<br/><br/> მზად ვარ ახალი,საინტერესო გამოწვევებისთვის,ახალი პროექტებისთვის და თუ  კი ხარ ის,ვისაც აქვს ინოვაციური,საინტერესო პროექტი სიამოვნებით ვითანამშრომლებ თქვენთან.'
            aboutMeSkill.current.innerText = 'უნარები!'
            aboutMeBtn.current.innerText = 'კონტაქტი'
            projTitleRef.current.innerText = 'პროექტები'
            seeMoreBtnBlackRef.current.innerText = 'მეტი პროექტი'
            contactTitleRef.current.innerText = 'კონტაქტი'
            contactParRef.current.innerText = 'დასაკონტაქტებლად შეავსეთ ქვემოთ მოცემული ველები და შეძლებისდგავარად სწრაფად მიიღებთ პასუხს'
            contactSendBtnRef.current.innerText = 'გაგზავნა'
            inputName.current.placeholder = 'სახელი'
            inputMail.current.placeholder = 'ელფოსტა'
            inputNumber.current.placeholder = 'ნომერი'
            inputText.current.placeholder = 'თქვენი შეტყობინება'

        if(lg === 'eng') {
            aboutMeTitle.current.innerText = 'ABOUT ME'
            aboutMeParag.current.innerHTML = 'Im a Frontend Web Developer building the Front-End of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.<br/><br/> Im open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then dont hesitate to contact me.'
            aboutMeSkill.current.innerText = 'Skills!'
            aboutMeBtn.current.innerText = 'CONTACT'
            projTitleRef.current.innerText = 'PROJECTS'
            seeMoreBtnBlackRef.current.innerText = 'See More Projects'
            contactTitleRef.current.innerText = 'CONTACT'
            contactParRef.current.innerText = 'Feel free to Contact me by submitting the form below and I will get back to you as soon as possible'
            contactSendBtnRef.current.innerText = 'Send'
            inputName.current.placeholder = 'Name'
            inputMail.current.placeholder = 'Email'
            inputNumber.current.placeholder = 'Number'
            inputText.current.placeholder = 'Your Message'
            projBtnRef.current.innerText = 'PROJECTS'
        }
    },[isEng])


    const handleClick = (refname) => {
        refname.current?.scrollIntoView({behavior: 'smooth'});
    };

    const sendEmail =(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_bpng7e7', 'template_y2xffsh', form.current, 'k5sgg72-uloGuXB_E')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()

          notify()
    }
    

    return(
    <div>

        <Navbar refing={props.refing} refcontact={props.refcontact}/>

        {/* ჰიუმ ფეიჯი ////////////////////////////////////////////////////// */}
        <span ref={homeRef}></span>
        <div className="home geoStyle">
            
             <SVG />

            <div className="button_to_prj" onClick={()=> handleClick(projectRef)} style={{width:'fit-content'}}>
                <div className="button_to_prj_inner">
                    <p ref={projBtnRef}></p>
                </div>
            </div>

            {/* სოციალური ქსელები */}
            <SocialLinks />
            
        </div>

        {/* ებაუთ ფეიჯი ////////////////////////////////////////////////////// */}
        <div ref={props.refing}></div>
        <div className="about_me geoStyle" >
                <h1 className="about_me_h1" ref={aboutMeTitle}>ჩემ შესახებ</h1>
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
                        <h2 ref={aboutMeSkill}>უნარები!</h2>

                        <div className="my_skills">
                            <span className="skill">HTML</span>
                            <span className="skill">CSS</span>
                            <span className="skill">SASS</span>
                            <span className="skill">SCSS</span>
                            <span className="skill">Tailwindcss</span>
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
        <div className="projects geoStyle" >
                <div className="header_underline">
                    <h1 className="about_me_h1" ref={projTitleRef}>პროექტები</h1>
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


                            <div className="prj_inner projectPageInner">
                                <h3>{project.title}</h3>
                                <p>{localStorage.language === 'eng' ? `${project.descriptionEng}` : `${project.description}`} {project.framework}</p>

                                {project.work1 && 
                                    <div className="workBTNblock">
                                        {project.work1 && <div className="workBTN"><p>{project.work1}</p></div>}
                                        {project.work2 && <div className="workBTN"><p>{project.work2}</p></div>}
                                        {project.work3 && <div className="workBTN"><p>{project.work3}</p></div>}
                                        {project.work4 && <div className="workBTN"><p>{project.work4}</p></div>}
                                    </div>
                                }

                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <span className="button_to_cont visitBTN">
                                            <span ref={button} className='button_to_cont_inner'>
                                            {localStorage.language === 'eng' ? `${project.buttonEng}` : `${project.button}`}
                                            </span>
                                        </span>
                                    </a>
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
        <span ref={props.refcontact}></span>
        <div className="contact geoStyle">
            <div className="contact_header">
                <h1 className="about_me_h1" ref={contactTitleRef}>კონტაქტი</h1>
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

        <Footer iseng={props.isEng}/>
        <Toaster 
            toastOptions={{
                className: 'toaster',
                duration: 6000,
                style: {
                  border: '1px solid #000',
                  padding: '16px',
                  color: '#713200',
                },
              }}
        />
    </div>
    )
}

export default Home;


    