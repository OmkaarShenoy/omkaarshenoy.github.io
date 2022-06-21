import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/index'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">


        <Outlet />

        &lt;/body&gt;
        <br />


      </div>
    </div>
  )
}

export default Layout
