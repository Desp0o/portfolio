import React from 'react'
import './titleComponent.css'
import { useSelector } from 'react-redux'

export default function TitleComponent({propsRef}) {

  const titleClass = useSelector( state => state.theme.setTitleClass)

  return (
    <>
        <div className="title_and_underline">
            <h1 className={titleClass}>{propsRef}</h1>
            <span className="underline"></span>
        </div>
    </>
  )
}
