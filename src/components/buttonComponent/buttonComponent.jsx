import React from 'react'
import { Link } from 'react-router-dom'
import "./buttonComponent.css"


export default function ButtonComponent({value, path, handler}) {
  return (
    <>
        <Link to={path} onClick={handler}>
            <div className='buttonComponent'>{value}</div>
        </Link>
        
    </>
  )
}
