import {React} from 'react';
import './App.css';
import Home from './Home';
import Projs from './redProj'
import HomeENG from './HomeENG'
import ProjENG from './ProjENG'
import HomeDark from './darkmode/homdeDark'
import PagePrjDark from './darkmode/projDark'
import HomeEngDark from './darkmode/homeEngDark'
import ProjectDarkEng from './darkmode/projDarkEng'

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
       
        
      <Routes>
        <Route exact path="*"        element={<Home />} />
        <Route exact path="/redProj" element={<Projs />} />
        <Route exact path="/HomeENG" element={<HomeENG />} />
        <Route exact path="/ProjENG" element={<ProjENG />} />

        
        <Route exact path="/darkmode/homdeDark" element={<HomeDark />} />
        <Route exact path="/darkmode/projDark" element={<PagePrjDark />} />

        <Route exact path="/homeEngDark" element={<HomeEngDark />} />
        <Route exact path="/projDarkEng" element={<ProjectDarkEng />} />
        
      </Routes>
      
      </div>
    
  );
}

export default App;
