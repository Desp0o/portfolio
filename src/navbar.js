import {React, useEffect, useState} from "react";
import {Link} from  "react-router-dom";
//CSS
import "./navbar.css"
//images
import despoIMG from './images/despo_img.png'
import menu from './images/menu.png'
import close from './images/close.png'


const imageStyle = {
    width: '50px',
    borderRadius:'50%'
}

function Navbar() {
    const [toggle, setToggle]   = useState(false)
    const [menuIMG, setMenuIMG] = useState(menu)
    const [dashbrd, setDashbrd] = useState('menu_dashboard')

    function toggleMenu() {
        if(!toggle){
            setMenuIMG(close)
            setDashbrd('menu_dashboard visible')
            setToggle(true)
        }else{
            setMenuIMG(menu)
            setDashbrd('menu_dashboard')
            setToggle(false)
        }
    }

    return(
    <div>
        <nav>
            <div className="nav_left">
                <img src={despoIMG} style={imageStyle} />
                <p>Tornike Despotashvili</p>
            </div>

            <div className="nav_right">
                <Link to='' className="navLinks">Home</Link>
                <Link to='' className="navLinks">About</Link>
                <Link to='' className="navLinks">Projects</Link>
                <Link to='' className="navLinks">Contact</Link>
            </div>

            <div className="burger_menu">
                <img className="menu_bars" src={menuIMG} onClick={()=> toggleMenu()} />
            </div>
        </nav>

        <div className={dashbrd} onClick={()=> toggleMenu()}>
            <div><Link to='' className="navLinks">Home</Link></div>
            <div><Link to='' className="navLinks">About</Link></div>
            <div><Link to='' className="navLinks">Projects</Link></div>
            <div><Link to='' className="navLinks">Contact</Link></div>
        </div>
    </div>
    )
}

export default Navbar;