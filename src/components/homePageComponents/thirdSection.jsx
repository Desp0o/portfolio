import React, { useRef, useEffect, useState } from "react";
import { ProjectArray } from "../ProjectArrayData";
import TitleComponent from "../titleComponent/titleComponent";
import ButtonComponent from "../buttonComponent/buttonComponent";
import SingleProjectComponent from "../singleProjectComponent/singleProjectComponent";
import { useSelector } from "react-redux";

import geolanguage from "../../geolang.json"
import englanguage from "../../englang.json"

export default function ThirdSection() {
  const language = useSelector((state) => state.language.value);
  const [languageJson, setLanguageJson] = useState(geolanguage)

  const first4Projects = ProjectArray.slice(0, 4);
  
  useEffect(() => {
    if (language === "geo") {
      setLanguageJson(geolanguage)
    }
    if (language === "eng") {
      setLanguageJson(englanguage)
    }
  }, [language]);

  return (
    <div className="thirdSection geoStyle">
      <TitleComponent propsRef={languageJson.projects} />

      <div className="projects">
        {/* პროექტების მაპინგი */}
        {first4Projects.map((project) => {
          return (
            <SingleProjectComponent
              key={project.id}
              project={project}
              cover={project.image}
              title={project.title}
              description={project.description}
              descriptionEng={project.descriptionEng}
              work1={project.work1}
              work2={project.work2}
              work3={project.work3}
              work4={project.work4}
              path={project.link}
              buttonProj={project.button}
              buttonProjEng={project.buttonEng}
            />
          );
        })}
      </div>

      <div className="project_mainPage_btn">
        <ButtonComponent value={languageJson.seeMoreProjects} path={"/Projects"} />
      </div>
    </div>
  );
}
