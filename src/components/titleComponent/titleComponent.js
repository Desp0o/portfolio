import React from 'react'
import './titleComponent.css'

export default function TitleComponent({propsRef}) {
  return (
    <>
        <div className="title_and_underline">
            <h1 className="main_title" ref={propsRef}></h1>
            <span className="underline"></span>
        </div>
    </>
  )
}
