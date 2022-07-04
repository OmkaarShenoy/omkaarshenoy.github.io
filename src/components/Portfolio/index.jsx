
import './index.scss'
import Experiences from '../Experiences/'
import experience from "../data/experiences.json"


import Landing from '../Landing/index.jsx'



const Portfolio = () => {




  return (
    <>
    <div class="wrapper">
    <div id='home'><Landing /></div>
    <div id='experiences' style={{position:'absolute', top:'100vh'}}><Experiences experiences={experience}/></div>
    </div>
    </>
  )
}

export default Portfolio
