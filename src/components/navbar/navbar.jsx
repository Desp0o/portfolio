import { React, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import despoIMG from "../../images/despo_img_512.webp";
import menu from "../../images/menu.png";
import close from "../../images/close.png";

import "./navbar.css";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import { makeEng, makeGeo } from "../../store/languageSlice";
import { changeThemeToDark, changeThemeToLight } from "../../store/themeMode";

const imageStyle = {
  width: "50px",
  borderRadius: "50%",
};

export default function Navbar(props) {
  

  const language = useSelector((store) => store.language.value);
  const themeMode = useSelector((store) => store.theme.themeValue)
  const navbarClass = useSelector((store) => store.theme.setNavbarClass)
  const navLinksClass = useSelector((store) => store.theme.setNavLinksClass)
  const dashBoardMode = useSelector((store) => store.theme.setDashboardMode)
  const togglerIco = useSelector((store) => store.theme.setTogglerIco)

  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(changeThemeToDark())
    if(themeMode === 'dark'){
        dispatch(changeThemeToLight())
    }
  }

  //change language to English
  const engLang = () => {
    dispatch(makeEng());
  };

  //change language to Georgian
  const geoLang = () => {
    dispatch(makeGeo());
  };







  const navLanguageEng = useRef();
  const navLanguageGeo = useRef();
  const burgerLanguageEng = useRef();
  const burgerLanguageGeo = useRef();
  const navbarTitleHref = useRef();
  const navHomeRef = useRef();
  const navAboutRef = useRef();
  const navProjRef = useRef();
  const navContRef = useRef();
  const burgerMain = useRef();
  const burgerAbout = useRef();
  const burgerProj = useRef();
  const burgerCont = useRef();

  const [menuIMG, setMenuIMG] = useState(menu);
  const [dashbrd, setDashbrd] = useState("menu_dashboard");
  const [overlay, setOverlay] = useState("overlay");
  const [toggle, setToggle] = useState(false);

  function toggleMenu() {
    if (!toggle) {
      setMenuIMG(close);
      setDashbrd("menu_dashboard menu_dashboard_Active");
      setOverlay("overlay overlay_Active");
      setToggle(true);
    } else {
      setMenuIMG(menu);
      setDashbrd("menu_dashboard");
      setOverlay("overlay");
      setToggle(false);
    }
  }

  const handleClick = (refname) => {
    refname.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (language === "geo") {
      navLanguageGeo.current.style.display = "none";
      burgerLanguageGeo.current.style.display = "none";
      navbarTitleHref.current.innerText = "თორნიკე დესპოტაშვილი";
      navHomeRef.current.innerText = "მთავარი";
      navAboutRef.current.innerText = "შესახებ";
      navProjRef.current.innerText = "პროექტები";
      navContRef.current.innerText = "კონტაქტი";
      burgerMain.current.innerText = "მთავარი";
      burgerAbout.current.innerText = "შესახებ";
      burgerProj.current.innerText = "პროექტები";
      burgerCont.current.innerText = "კონტაქტი";
      navLanguageEng.current.style.display = "block";
      navLanguageGeo.current.style.display = "none";
      burgerLanguageEng.current.style.display = "flex";
      burgerLanguageGeo.current.style.display = "none";
    }else if (language === "eng") {
      navbarTitleHref.current.innerText = "tornike despotashvili";
      navHomeRef.current.innerText = "Home";
      navAboutRef.current.innerText = "About";
      navProjRef.current.innerText = "Projects";
      navContRef.current.innerText = "Contact";
      burgerMain.current.innerText = "Home";
      burgerAbout.current.innerText = "About";
      burgerProj.current.innerText = "Projects";
      burgerCont.current.innerText = "Contact";
      navLanguageEng.current.style.display = "none";
      navLanguageGeo.current.style.display = "block";
      burgerLanguageEng.current.style.display = "none";
      burgerLanguageGeo.current.style.display = "flex";
    }

    // eslint-disable-next-line
  }, [language]);

  return (
    <>
      {/* ნავიგაცია /////////////////////////////////////////// */}
      <div className={navbarClass}>
        <div className="navbar_inner">
          <div className="nav_left">
            <img src={despoIMG} style={imageStyle} alt="logo" />
            <Link to="/">
              <p
                className={`${navLinksClass} geoStyle`}
                ref={navbarTitleHref}
              ></p>
            </Link>
          </div>

          <div className="nav_right">
            <Link to="/" className={navLinksClass} ref={navHomeRef}></Link>
            <Link
              to=""
              className={`${navLinksClass} ${props.display}`}
              ref={navAboutRef}
              onClick={() => handleClick(props.refing)}
            ></Link>
            <Link
              to="/Projects"
              className={`${navLinksClass} ${props.display}`}
              ref={navProjRef}
            ></Link>
            <Link
              to=""
              className={`${navLinksClass} ${props.display}`}
              ref={navContRef}
              onClick={() => handleClick(props.refcontact)}
            ></Link>
            <p className={navLinksClass} ref={navLanguageEng} onClick={engLang}>
              ENG
            </p>
            <p className={navLinksClass} ref={navLanguageGeo} onClick={geoLang}>
              GEO
            </p>

            <div className="modeTogglerDiv">
              <img
                src={togglerIco}
                className="modeTogglerIcons"
                alt="mode toggler"
                onClick={changeTheme}
              />
            </div>
          </div>

          <div className="burger_menu">
            <img
              className="menu_bars"
              src={menuIMG}
              onClick={() => toggleMenu()}
              alt="menu"
            />
          </div>
        </div>
      </div>

      <div
        className={`${dashBoardMode} ${dashbrd}`}
        onClick={() => toggleMenu()}
      >
        <div>
          <Link
            to="/"
            className={`${navLinksClass} geoStyle`}
            ref={burgerMain}
          ></Link>
        </div>
        <div className={`${props.display}`}>
          <Link
            to=""
            className={`${navLinksClass} geoStyle`}
            ref={burgerAbout}
            onClick={() => handleClick(props.refing)}
          ></Link>
        </div>
        <div className={`${props.display}`}>
          <Link
            to="/Projects"
            className={`${navLinksClass} geoStyle`}
            ref={burgerProj}
          ></Link>
        </div>
        <div className={`${props.display}`}>
          <Link
            to=""
            className={`${navLinksClass} geoStyle`}
            ref={burgerCont}
            onClick={() => handleClick(props.refcontact)}
          ></Link>
        </div>
        <div ref={burgerLanguageEng} onClick={engLang}>
          <p className={`${navLinksClass} geoStyle`}>ENG</p>
        </div>
        <div ref={burgerLanguageGeo} onClick={geoLang}>
          <p className={`${navLinksClass} geoStyle`}>GEO</p>
        </div>
        <div className="modeTogglerDiv">
          <img
            src={togglerIco}
            className="modeTogglerIcons"
            alt="mode toggler"
            onClick={changeTheme}
          />
        </div>
      </div>

      <div className={overlay} onClick={() => toggleMenu()}></div>
    </>
  );
}
