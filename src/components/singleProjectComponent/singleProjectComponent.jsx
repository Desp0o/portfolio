import React from 'react'

export default function SingleProjectComponent({project, cover, title, description, descriptionEng, work1, work2, work3, work4, path, buttonProj, buttonProjEng}) {
    return (
    <div className="singleProj">
        <img src={cover} className="singleProjImg" alt="project cover" />

        <div className="singleProj_conent">
            <h3 className="singleProj_header">{title}</h3>

            <div className="singleProj_desc">
                <p>{localStorage.language === 'eng' ? descriptionEng : description}</p>

                <div className="tools">
                    
                    <p className="tools_item">{work1}</p>
                    <p className="tools_item">{work2}</p>
                    {project?.work3 ? <p className="tools_item">{work3}</p> : <></>}
                    {project?.work4 ? <p className="tools_item">{work4}</p> : <></>}

                </div>
            </div>

            <a href={path} target='_blank' rel="noopener noreferrer">
                <div className='singleProj_link_btn'>
                    <p>{localStorage.language === 'eng' ? buttonProjEng : buttonProj}</p>
                </div>
            </a>
        </div>


    </div>
  )
}
