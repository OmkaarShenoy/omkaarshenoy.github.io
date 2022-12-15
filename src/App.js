import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Experiences from './components/Experiences/'
import './App.scss'
import Landing from './components/Landing'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}/>

        <Route path="#Experiences" element={<Experiences />}/>
      </Routes>
    </>

  )
}


export default App
