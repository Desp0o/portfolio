import React, {useRef, useEffect, useContext} from 'react'
import { langContext } from '../context';
import TitleComponent from '../titleComponent/titleComponent';
import ButtonComponent from "../buttonComponent/buttonComponent"

import "../../styles/about.css"

export default function SecondSection({handler}) {

const aboutMeTitle = useRef()
const aboutMeParag = useRef()
const aboutMeBtn = useRef()
const aboutMeSkill = useRef()

const { isEng } = useContext(langContext)
const lg = localStorage.getItem('language');

useEffect(()=>{
    aboutMeTitle.current.innerText = 'ჩემ შესახებ'
    aboutMeParag.current.innerHTML = 'მე ვარ,თორნიკე დესპოტაშვილი Front-End -ზე ფოკუსირებული ვებ დეველოპერი. ვაწყობ ვებ-გვერდებს, რომელიც დღეს ერთ-ერთი  ყველაზე მნიშვნელოვანი საფეხურია ბიზნესის წარმატებისთვის.<br/><br/> მზად ვარ ახალი,საინტერესო გამოწვევებისთვის,ახალი პროექტებისთვის და თუ  კი ხარ ის,ვისაც აქვს ინოვაციური,საინტერესო პროექტი სიამოვნებით ვითანამშრომლებ თქვენთან.'
    aboutMeBtn.current.innerText = 'კონტაქტი'
    aboutMeSkill.current.innerText = 'უნარები!'
if (lg === 'eng') {
    aboutMeTitle.current.innerText = 'ABOUT ME'
    aboutMeParag.current.innerHTML = 'Im a Frontend Web Developer building the Front-End of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.<br/><br/> Im open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then dont hesitate to contact me.'
    aboutMeBtn.current.innerText = 'CONTACT'
    aboutMeSkill.current.innerText = 'Skills!'
}

},[isEng])

return (
    <>
    <div className="about_me geoStyle" >

        <TitleComponent propsRef={aboutMeTitle}/>
        
        <div className="about_me_inner">
            <div className="about_me_inner_left">

                <p ref={aboutMeParag}></p>

                <ButtonComponent value={aboutMeBtn} handler={handler}/>

                
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
    </>
  )
}
