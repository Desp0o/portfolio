import React, { useRef, useEffect, useState } from "react";
import TitleComponent from "../titleComponent/titleComponent";
import ButtonComponent from "../buttonComponent/buttonComponent";
import geolanguage from "../../geolang.json"
import englanguage from "../../englang.json"

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
  "react-query",
  "Framer",
  "Tailwindcss",
  "Node js",
  "MySQL",
  "Postman",
  "Firebase",
  "Figma",
];

export default function SecondSection({ handler }) {
  const language = useSelector((state) => state.language.value);
  const skillTitle = useSelector((state) => state.theme.setSkillTitle);

  const [languageJson, setLanguageJson] = useState(geolanguage)

  useEffect(() => {
    if (language === "geo") {
      setLanguageJson(geolanguage)
    } else if (language === "eng") {
      setLanguageJson(englanguage)
    }
  }, [language]);

  return (
    <>
      <div className="about_me geoStyle">
        <TitleComponent propsRef={languageJson.aboutMe} />

        <div className="about_me_inner">
          <div className="about_me_inner_left">
            <p dangerouslySetInnerHTML={{ __html: languageJson.bio }}></p>

            <ButtonComponent value={languageJson.contact} handler={handler} />
          </div>

          <div className="about_me_inner_right">
            <h2 className={skillTitle}>
              {languageJson.skills}
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
