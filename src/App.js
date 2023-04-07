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
  // Load the Facebook SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Initialize the Facebook SDK
  window.fbAsyncInit = function() {
    window.FB.init({
      xfbml: true,
      version: 'v16.0'
    });
  };
}, []);

// Show the chatbox component
const showChatbox = () => {
  if (window.FB) {
    window.FB.CustomerChat.show(true);

    // Close the chat window after the chat is closed
    window.FB.Event.subscribe('customerchat.dialogHide', function() {
      setTimeout(function() {
        window.FB.CustomerChat.hide();
      }, 500); // Add a 500ms delay before hiding the chat window
    });
  } else {
    setTimeout(showChatbox, 100);
  }
};

// Render the chatbox component


  return (
    <div>
         <div
          className="fb-customerchat"
          attribution="setup_tool"
          page_id="127905463538280"
          greeting_dialog_display="hide"
          entry_point_icon="chat_angular_icon"
          entry_point_label="none"
          minimized={true}
        />

        <Routes>
          <Route exact path="*"         element={<Home refing={aboutMeRef} refcontact={contactRef}/>} />
          <Route exact path="/Projects" element={<Projs/>} />
        </Routes>
    </div>
    
  );
}

export default App;
