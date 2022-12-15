import {React} from 'react';
import Home from './Home';
import Projs from './redProj'

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
      </Routes>
    </div>
    
  );
}

export default App;
