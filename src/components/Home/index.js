import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import './fontawesome.scss';


import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'O', 'm','k','a','a','r', ' ', 'S','h','e','n','o','y','.']
  const jobArray = []

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={letterClass}>e</span>
            <span className={letterClass}>y</span>

            <span className={`${letterClass} _13`}>&nbsp;</span>

            <span className={`${letterClass} _14`} >👋</span>


            <br />
            <span className={`${letterClass} _15`}>I</span>
            <span className={`${letterClass} _15`}>'</span>
            <span className={`${letterClass} _15`}>m</span>


            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={17}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Student | Developer</h2>
          <div class="shareone">
<div class="wrapper">
  <div class="social-container">
    <ul class="social-icons">
      <li class="icon email">
        <span class="tooltip">Email</span>
        <span> <a href="mailto:omkaarshenoyos@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa fa-at" style={{ left: '16px', top: '15px' }}></i></a></span>
      </li>
      <li class="icon instagram">
        <span class="tooltip">Instagram</span>
        <span> <a href="https://www.instagram.com/omkrshny/" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram" style={{ left: '16px', top: '15px' }}></i></a></span>
      </li>
      <li class="icon linkedin">
        <span class="tooltip">Linkedin</span>
        <span> <a href="#"><i class="fa fa-linkedin" style={{ left: '16px', top: '15px' }} target="_blank" rel="noopener noreferrer"></i></a></span>
      </li>
      <li class="icon github">
        <span class="tooltip">Github</span>
        <span> <a href="#"><i class="fa fa-github" style={{ left: '16px', top: '15px' }} target="_blank" rel="noopener noreferrer"></i></a></span>
      </li>
    </ul>
  </div>
</div>
</div>








        </div>

      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
