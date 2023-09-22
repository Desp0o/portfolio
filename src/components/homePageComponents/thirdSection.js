import React, {useRef, useEffect, useContext} from 'react'
import { ProjectArray } from '../ProjectArrayData';
import { langContext } from '../context';
import TitleComponent from '../titleComponent/titleComponent';
import ButtonComponent from "../buttonComponent/buttonComponent"
import SingleProjectComponent from '../singleProjectComponent/singleProjectComponent';

export default function ThirdSection() {

    const { isEng } = useContext(langContext)
    const lg = localStorage.getItem('language');

    const first4Projects = ProjectArray.slice(0, 4);

    const projTitleRef = useRef()
    const button = useRef()
    const seeMoreBtnBlackRef = useRef()

    useEffect(()=>{
        projTitleRef.current.innerText = 'პროექტები'
        seeMoreBtnBlackRef.current.innerText = 'მეტი პროექტი'
    if (lg === 'eng') {
        projTitleRef.current.innerText = 'PROJECTS'
        seeMoreBtnBlackRef.current.innerText = 'See More Projects'
    }
    
    },[isEng])

  return (
    <div className="thirdSection geoStyle" >

                <TitleComponent propsRef={projTitleRef}/>

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
                        )
                    })}

                </div>
                
                <div className='project_mainPage_btn'>
                    <ButtonComponent value={seeMoreBtnBlackRef} path={"/Projects"}/>
                </div>


            </div>
  )
}
