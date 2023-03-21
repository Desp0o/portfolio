import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter as Router } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import { LangContexProvider } from './components/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ScrollToTop />
    <React.Fragment>
      <LangContexProvider>
        <App />
      </LangContexProvider>
    </React.Fragment>
  </Router>
);