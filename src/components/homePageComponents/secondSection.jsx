import React, { useRef, useEffect } from "react";
import TitleComponent from "../titleComponent/titleComponent";
import ButtonComponent from "../buttonComponent/buttonComponent";

import "../../styles/about.css";
import { useSelector } from "react-redux";

const skillArr = [
  "HTML",
  "CSS",
  "SASS",
  "SCSS",
  "Github",
  "Git",
  "Gitlab",
  "Javascript",
  "React",
  "Redux Toolkit",
  "Responsive Design",
  "react-query",
  "webView",
  "Framer",
  "Tailwindcss",
  "Node js",
  "MySQL",
  "Postman",
  "Firebase",
  "Figma"
];

export default function SecondSection({ handler }) {
  const aboutMeTitle = useRef();
  const aboutMeParag = useRef();
  const aboutMeBtn = useRef();
  const aboutMeSkill = useRef();

  const language = useSelector((state) => state.language.value);

  const skillTitle = useSelector((state) => state.theme.setSkillTitle);

  useEffect(() => {
    if (language === "geo") {
      aboutMeTitle.current.innerText = "ჩემ შესახებ";
      aboutMeParag.current.innerHTML =
        "მე ვარ,თორნიკე დესპოტაშვილი Front-End -ზე ფოკუსირებული ვებ დეველოპერი. ვაწყობ ვებ-გვერდებს, რომელიც დღეს ერთ-ერთი  ყველაზე მნიშვნელოვანი საფეხურია ბიზნესის წარმატებისთვის.<br/><br/> მზად ვარ ახალი,საინტერესო გამოწვევებისთვის,ახალი პროექტებისთვის და თუ  კი ხარ ის,ვისაც აქვს ინოვაციური,საინტერესო პროექტი სიამოვნებით ვითანამშრომლებ თქვენთან.";
      aboutMeBtn.current.innerText = "კონტაქტი";
      aboutMeSkill.current.innerText = "უნარები!";
    } else if (language === "eng") {
      aboutMeTitle.current.innerText = "ABOUT ME";
      aboutMeParag.current.innerHTML =
        "Im a Frontend Web Developer building the Front-End of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.<br/><br/> Im open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then dont hesitate to contact me.";
      aboutMeBtn.current.innerText = "CONTACT";
      aboutMeSkill.current.innerText = "Skills!";
    }
  }, [language]);

  return (
    <>
      <div className="about_me geoStyle">
        <TitleComponent propsRef={aboutMeTitle} />

        <div className="about_me_inner">
          <div className="about_me_inner_left">
            <p ref={aboutMeParag}></p>

            <ButtonComponent value={aboutMeBtn} handler={handler} />
          </div>

          <div className="about_me_inner_right">
            <h2 className={skillTitle} ref={aboutMeSkill}>
              უნარები!
            </h2>

            <div className="my_skills">
              {skillArr.map((skill, index) => {
                return (
                  <span key={index} className="skill">
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
