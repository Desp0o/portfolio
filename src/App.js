import {React, useRef, useEffect} from 'react';
import Home from './Home';
import Projs from './components/Projects/Projects'

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
const aboutMeRef = useRef()
const contactRef = useRef()


useEffect(() => {
  window.fbAsyncInit = function() {
    window.FB.init({
      xfbml            : true,
      version          : 'v12.0'
    });
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}, []);


  return (
    <div>

    <div className="fb-customerchat"
        attribution="setup_tool"
        page_id="127905463538280"
    >
    </div>


        <Routes>
          <Route exact path="*"         element={<Home refing={aboutMeRef} refcontact={contactRef}/>} />
          <Route exact path="/Projects" element={<Projs/>} />
        </Routes>
    </div>
    
  );
}

export default App;
