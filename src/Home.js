import {React, useEffect, useState} from "react";
import {useRef, useContext} from 'react';
import { langContext } from "./components/context";
import {Link} from  "react-router-dom";
import emailjs from '@emailjs/browser';
import Footer from "./components/footer/footer";
import { projectDB } from "./projectDB";
import Navbar from "./components/navbar/navbar";

//CSS
import './styles/home.css'
import './styles/about.css'
import './components/Projects/project.css'
import './styles/contact.css'
import './index.css'


function Home(props) {
    const {isEng} = useContext(langContext)

    const [svgH, setSvgH] = useState(310.80704)

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
    const aboutRef           = useRef(null)
    const projectRef         = useRef(null)
    const contactRef         = useRef(null)

    const lg = localStorage.getItem('language');

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

    useEffect(()=>{
        if(window.innerWidth < 769){
            setSvgH(200)
        }

        if(window.innerWidth > 1500){
            setSvgH(600)
        }
    },[])
    

    return(
    <div>

        <Navbar refing={props.refing} refcontact={props.refcontact}/>

        {/* ჰიუმ ფეიჯი ////////////////////////////////////////////////////// */}
        <span ref={homeRef}></span>
        <div className="home geoStyle">
            
             <div className="svg_div">
                <svg  data-name="Layer 1" width="1139.17088" height={svgH} viewBox="0 0 1139.17088 654.54324">
                    <circle cx="246.82682" cy="521.76476" r="59.24334" fill="#f2f2f2"/>
                    <circle cx="256.45989" cy="513.095" r="59.24334" fill="#fcce10"/>
                    <rect x="304.17137" y="447.54324" width="732.99951" height="2" fill="#3f3d56"/>
                    <path d="M714.20735,141.38055H454.03775v-5.36232h-117.971v5.36232H74.82467a17.5985,17.5985,0,0,0-17.59852,17.59851V515.23125a17.59856,17.59856,0,0,0,17.59852,17.59858H714.20735a17.59856,17.59856,0,0,0,17.59852-17.59858V158.97906A17.5985,17.5985,0,0,0,714.20735,141.38055Z" transform="translate(-30.41456 -122.72838)" fill="#3f3d56"/>
                    <rect x="50.4058" y="49.75362" width="627.3913" height="353.91304" fill="#fcce10"/>
                    <circle cx="363.56522" cy="33.66667" r="6.43478" fill="#fcce10"/>
                    <polygon points="498.374 403.667 50.406 403.667 50.406 49.754 498.374 403.667" opacity="0.1"/>
                    <circle cx="148.57375" cy="316.87641" r="60.3068" fill="#f2f2f2"/><rect x="509.95272" y="240.62175" width="58.6052" height="12.24586" fill="#3f3d56"/>
                    <rect x="439.10165" y="145.27896" width="200.30733" height="5.24823" fill="#3f3d56"/>
                    <rect x="439.10165" y="161.89834" width="200.30733" height="5.24823" fill="#3f3d56"/>
                    <rect x="439.10165" y="178.51773" width="200.30733" height="5.24823" fill="#3f3d56"/>
                    <rect x="439.10165" y="195.13711" width="200.30733" height="5.24823" fill="#3f3d56"/>
                    <rect x="439.10165" y="211.7565" width="200.30733" height="5.24823" fill="#3f3d56"/>
                    <rect x="614.91726" y="56.9338" width="24.49173" height="24.49173" fill="#f2f2f2"/>
                    <path d="M681.1947,215.52507h-29.74v-29.74h29.74Zm-28.44691-1.293h27.15387V187.07816H652.74779Z" transform="translate(-30.41456 -122.72838)" fill="#3f3d56"/>
                    <path d="M749.42165,519.96024H688.19234v-4.41153a.87468.87468,0,0,0-.87471-.87471h-20.9929a.87468.87468,0,0,0-.87471.87471v4.41153H652.32945v-4.41153a.87467.87467,0,0,0-.8747-.87471H630.46184a.87468.87468,0,0,0-.8747.87471v4.41153H616.46657v-4.41153a.87468.87468,0,0,0-.8747-.87471H594.599a.87468.87468,0,0,0-.87471.87471v4.41153H580.60369v-4.41153a.87468.87468,0,0,0-.87471-.87471H558.73607a.87468.87468,0,0,0-.8747.87471v4.41153H544.7408v-4.41153a.87468.87468,0,0,0-.8747-.87471H522.87319a.87467.87467,0,0,0-.8747.87471v4.41153H508.87792v-4.41153a.87468.87468,0,0,0-.87471-.87471h-20.9929a.87468.87468,0,0,0-.87471.87471v4.41153H473.015v-4.41153a.87468.87468,0,0,0-.8747-.87471H307.69588a.87468.87468,0,0,0-.8747.87471v4.41153H293.70061v-4.41153a.87468.87468,0,0,0-.8747-.87471H271.833a.87467.87467,0,0,0-.8747.87471v4.41153H257.83773v-4.41153a.87468.87468,0,0,0-.87471-.87471h-20.9929a.87468.87468,0,0,0-.87471.87471v4.41153H221.97484v-4.41153a.87467.87467,0,0,0-.8747-.87471H200.10723a.87468.87468,0,0,0-.8747.87471v4.41153H186.112v-4.41153a.87468.87468,0,0,0-.8747-.87471H164.24435a.87468.87468,0,0,0-.87471.87471v4.41153H150.24908v-4.41153a.87468.87468,0,0,0-.87471-.87471H128.38146a.87468.87468,0,0,0-.8747.87471v4.41153H114.38619v-4.41153a.87468.87468,0,0,0-.8747-.87471H92.51858a.87467.87467,0,0,0-.8747.87471v4.41153H51.40747a20.99293,20.99293,0,0,0-20.99291,20.99291v9.4925A20.99291,20.99291,0,0,0,51.40747,571.4385H749.42165a20.9929,20.9929,0,0,0,20.99291-20.99285v-9.4925A20.99292,20.99292,0,0,0,749.42165,519.96024Z" transform="translate(-30.41456 -122.72838)" fill="#3f3d56"/>
                    <path d="M193.58593,477.27162a76,76,0,1,1,76-76A76.08614,76.08614,0,0,1,193.58593,477.27162Zm0-150a74,74,0,1,0,74,74A74.08385,74.08385,0,0,0,193.58593,327.27162Z" transform="translate(-30.41456 -122.72838)" fill="#3f3d56"/>
                    <rect x="586.17137" y="32.54324" width="254.99951" height="2" fill="#3f3d56"/>
                    <rect x="406.17137" y="560.54324" width="732.99951" height="2" fill="#3f3d56"/>
                    <rect x="192.67161" y="652.54324" width="254.99951" height="2" fill="#3f3d56"/>
                    <rect x="471" y="550" width="28" height="28" fill="#fcce10"/>
                    <path d="M546.41456,684.72838h-34v-34h34Zm-32.52174-1.47826H544.9363V652.20664H513.89282Z" transform="translate(-30.41456 -122.72838)" fill="#3f3d56"/>
                    <rect x="796" y="22" width="28" height="28" fill="#fcce10"/>
                    <path d="M871.41456,156.72838h-34v-34h34Zm-32.52174-1.47826H869.9363V124.20664H838.89282Z" transform="translate(-30.41456 -122.72838)" fill="#3f3d56"/>
                    <rect x="1078" y="550" width="28" height="28" fill="#fcce10"/>
                    <path d="M1153.41456,684.72838h-34v-34h34Zm-32.52174-1.47826h31.04348V652.20664h-31.04348Z" transform="translate(-30.41456 -122.72838)" fill="#3f3d56"/>
                    <path d="M1087.58593,354.6866h-2.37862V289.525a37.71374,37.71374,0,0,0-37.71385-37.71377H909.44A37.71373,37.71373,0,0,0,871.72613,289.525V647.00639A37.71374,37.71374,0,0,0,909.44,684.72017h138.05348a37.71374,37.71374,0,0,0,37.71385-37.71378V401.06969h2.37862Z" transform="translate(-30.41456 -122.72838)" fill="#3f3d56"/>
                    <path d="M1077.176,291.74159v356.96a28.16523,28.16523,0,0,1-28.16016,28.17H910.296a28.16511,28.16511,0,0,1-28.16-28.17v-356.96a28.163,28.163,0,0,1,28.16-28.16h16.83a13.3792,13.3792,0,0,0,12.39,18.43h79.09a13.37908,13.37908,0,0,0,12.38995-18.43h18.02A28.16308,28.16308,0,0,1,1077.176,291.74159Z" transform="translate(-30.41456 -122.72838)" fill="#fcce10"/>
                    <rect x="928.57968" y="376.21769" width="41.32357" height="12.24586" fill="#3f3d56"/>
                    <rect x="878.62133" y="280.8749" width="141.24028" height="5.24823" fill="#3f3d56"/>
                    <rect x="878.62133" y="297.49429" width="141.24028" height="5.24823" fill="#3f3d56"/>
                    <rect x="878.62133" y="314.11367" width="141.24028" height="5.24823" fill="#3f3d56"/>
                    <rect x="878.62133" y="330.73306" width="141.24028" height="5.24823" fill="#3f3d56"/>
                    <rect x="878.62133" y="347.35244" width="141.24028" height="5.24823" fill="#3f3d56"/>
                    <rect x="929.68352" y="211.17873" width="24.49173" height="24.49173" fill="#f2f2f2"/>
                    <path d="M969.47386,340.03163v29.74h29.74v-29.74Zm28.45,28.45h-27.16v-27.16h27.16Z" transform="translate(-30.41456 -122.72838)" fill="#3f3d56"/>
                    <path d="M1077.176,610.58162v38.12a28.16523,28.16523,0,0,1-28.16016,28.17H910.296a28.16511,28.16511,0,0,1-28.16-28.17v-192.21l116.87,92.33,2,1.58,21.74,17.17,2.03,1.61Z" transform="translate(-30.41456 -122.72838)" opacity="0.1"/>
                    <circle cx="937.24147" cy="498.70691" r="43.86783" fill="#f2f2f2"/>
                    <path d="M350.58593,777.27162a87,87,0,1,1,87-87A87.09858,87.09858,0,0,1,350.58593,777.27162Zm0-172a85,85,0,1,0,85,85A85.09629,85.09629,0,0,0,350.58593,605.27162Z" transform="translate(-30.41456 -122.72838)" fill="#3f3d56"/>
                    <path d="M980.58593,655.27162a55,55,0,1,1,55-55A55.06223,55.06223,0,0,1,980.58593,655.27162Zm0-108a53,53,0,1,0,53,53A53.05963,53.05963,0,0,0,980.58593,547.27162Z" transform="translate(-30.41456 -122.72838)" fill="#3f3d56"/>
                </svg>
             </div>

            <div className="button_to_prj" onClick={()=> handleClick(projectRef)} style={{width:'fit-content'}}>
                <div className="button_to_prj_inner">
                    <p ref={projBtnRef}></p>
                </div>
            </div>

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

            <svg className="social_img" viewBox="0 0 72 72" version="1.1" onClick={()=> socialLink("https://www.facebook.com/profile.php?id=100091310801047")}>
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
        <div ref={props.refing}></div>
        <div className="about_me geoStyle" >
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
        <span ref={props.refcontact}></span>
        <div className="contact geoStyle">
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

        <Footer iseng={props.isEng}/>

    </div>
    )
}

export default Home;


    