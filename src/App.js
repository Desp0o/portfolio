import {React, useState, useRef} from 'react';
import Home from './Home';
import Projs from './components/Projects/Projects'

import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar/navbar';

function App() {
const aboutMeRef = useRef()
const contactRef = useRef()

const [isEng, setIsEng]     = useState(false)

function engLang() {
  localStorage.setItem("language", "eng");
  setIsEng(true)
}

function geoLang() {
  localStorage.setItem("language", "geo");
  setIsEng(false)
}


  return (
    <div>
        <Routes>
          <Route exact path="*"        element={<Home eng={engLang} geo={geoLang} isEng={isEng} refing={aboutMeRef} refcontact={contactRef}/>} />
          <Route exact path="/Projects" element={<Projs eng={engLang} geo={geoLang} isEng={isEng}/>} />
        </Routes>
    </div>
    
  );
}

export default App;
