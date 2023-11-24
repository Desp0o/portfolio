import React, {useContext} from 'react'
import { langContext } from '../context'
import './titleComponent.css'

export default function TitleComponent({propsRef}) {

  const {titleClass} = useContext(langContext)

  return (
    <>
        <div className="title_and_underline">
            <h1 className={titleClass} ref={propsRef}></h1>
            <span className="underline"></span>
        </div>
    </>
  )
}
