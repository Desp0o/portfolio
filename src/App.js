import {React} from 'react';
import './App.css';
import Home from './Home';
import Projs from './redProj'
import HomeENG from './HomeENG'
import ProjENG from './ProjENG'

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

        
        
      </Routes>
      
      </div>
    
  );
}

export default App;
