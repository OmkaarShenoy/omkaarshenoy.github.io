import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Aboutme from './components/AboutMe'
import Experiences from './components/Experiences/'
import './App.scss'
import React, {useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { BrowserRouter as Router} from 'react-router-dom';

  const TRACKING_ID = "UA-252626256-1"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="#AboutMe" element={<Aboutme />}/>
        <Route path="#Experiences" element={<Experiences />}/>
      </Routes>
    </>

  )
}


export default App
