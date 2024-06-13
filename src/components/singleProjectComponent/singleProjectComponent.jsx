import React from "react";

export default function SingleProjectComponent({
  project,
  cover,
  title,
  description,
  descriptionEng,
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  work7,
  path,
  buttonProj,
  buttonProjEng,
}) {
  return (
    <div className="singleProj">
      <img
        loading="lazy"
        src={cover}
        className="singleProjImg"
        alt="project cover"
      />

      <div className="singleProj_conent">
        
        <div className="title_desc_skills">
          <p className="singleProj_header">{title}</p>

          <div className="singleProj_desc">
            <p>
              {localStorage.language === "eng" ? descriptionEng : description}
            </p>

            <div className="tools">
              <p className="tools_item">{work1}</p>
              <p className="tools_item">{work2}</p>
              {project?.work3 ? <p className="tools_item">{work3}</p> : <></>}
              {project?.work4 ? <p className="tools_item">{work4}</p> : <></>}
              {project?.work5 ? <p className="tools_item">{work5}</p> : <></>}
              {project?.work6 ? <p className="tools_item">{work6}</p> : <></>}
              {project?.work7 ? <p className="tools_item">{work7}</p> : <></>}
            </div>
          </div>
        </div>

        <a href={path} target="_blank" rel="noopener noreferrer">
          <div className="singleProj_link_btn">
            <p>
              {localStorage.language === "eng" ? buttonProjEng : buttonProj}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
