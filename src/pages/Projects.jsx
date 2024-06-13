import { React, useEffect, useState } from "react";
import { ProjectArray } from "../components/ProjectArrayData";
import TitleComponent from "../components/titleComponent/titleComponent";
import SingleProjectComponent from "../components/singleProjectComponent/singleProjectComponent";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { useSelector } from "react-redux";
import geolanguage from "../geolang.json"
import englanguage from "../englang.json"

import "../styles/project.css";

function PagePrj(props) {
  const language = useSelector((state) => state.language.value);
  const [languageJson, setLanguageJson] = useState(geolanguage)

  useEffect(() => {
    if (language === "geo") {
      setLanguageJson(geolanguage)
    } else if (language === "eng") {
      setLanguageJson(englanguage)
    }
  }, [language]);

  return (
    <div className="geoStyle">
      <Navbar
        eng={props.eng}
        geo={props.geo}
        isEng={props.isEng}
        refing={props.refing}
        refcontact={props.refcontact}
        display="displayNone"
      />

      {/* mainScreen */}
      <div className="mainScreen">
        <TitleComponent propsRef={languageJson.seconPageTitle} />

        <div className="projects">
          {ProjectArray.map((project) => {
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
                work5={project?.work5}
                work6={project?.work6}
                work7={project?.work7}
                path={project.link}
                buttonProj={project.button}
                buttonProjEng={project.buttonEng}
              />
            );
          })}
        </div>
      </div>

      {/* footer ///////////////////// */}
      <Footer />
    </div>
  );
}

export default PagePrj;
