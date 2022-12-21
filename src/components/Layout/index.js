import './index.scss'
import Experiences from '../Experiences/'
import experience from "../data/experiences.json"
import Projects from '../Projects'
import Aboutme from '../AboutMe'
import Landing from '../Landing/index.jsx'

const Layout = () => {
  return (
    <div className="App">

        <div id='home'><Landing /></div>
        <div id='aboutme'><Aboutme /></div>
       {<div id='experiences' style={{paddingTop:'50px'}} ><Experiences experiences={experience} /></div>}
       {/* {<div id='projects'><Projects /></div>} */}

        <br />


     
    </div>
  )
}

export default Layout
