import { Route, Routes } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import Layout from './components/Layout'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Portfolio /> } />
        </Route>
      </Routes>
    </>
  )
}


export default App
