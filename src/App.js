import {React, useRef} from 'react';
import Home from './Home';
import Projs from './components/Projects/Projects'

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
const aboutMeRef = useRef()
const contactRef = useRef()

  return (
    <div>
        <Routes>
          <Route exact path="*"         element={<Home refing={aboutMeRef} refcontact={contactRef}/>} />
          <Route exact path="/Projects" element={<Projs/>} />
        </Routes>
    </div>
    
  );
}

export default App;
