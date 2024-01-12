import {React, useContext, useRef} from 'react';
import Home from './pages/Home';
import Projs from './pages/Projects'

import {
  Routes,
  Route,
} from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
const aboutMeRef = useRef()
const contactRef = useRef()

const bgColor = useSelector( state => state.theme.setBgColor)

  return (
    <div className={bgColor}>
        <Routes>
          <Route exact path="*"         element={<Home refing={aboutMeRef} refcontact={contactRef}/>} />
          <Route exact path="/Projects" element={<Projs/>} />
        </Routes>
    </div>
    
  );
}

export default App;
