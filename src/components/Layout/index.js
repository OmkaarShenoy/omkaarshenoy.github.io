import { Outlet } from 'react-router-dom'
import Home from '../Home/index.js'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      
      <div className="page">


        <Outlet />

        
        <br />

      
      </div>
    </div>
  )
}

export default Layout
