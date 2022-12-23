import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Aboutme from './components/AboutMe'
import Experiences from './components/Experiences/'
import './App.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import ReactGA from 'react-ga';
// Initialize google analytics using the tracking 
ReactGA.initialize('UA-167XXXXXX-X');

function App() {
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
