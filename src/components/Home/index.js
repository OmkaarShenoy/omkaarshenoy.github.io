import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import './fontawesome.scss';


import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'O', 'm', 'k', 'a', 'a', 'r', ' ', 'S', 'h', 'e', 'n', 'o', 'y',]
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
            <span className={`${letterClass} _12`}>e</span>
            <span className={`${letterClass} _13`}>y&nbsp;</span>

            <span className={`${letterClass} _14`} >👋</span>


            <br />
            <span className={`${letterClass} _15`}>I</span>
            <span className={`${letterClass} _16`}>'</span>
            <span className={`${letterClass} _16`}>m </span>

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
            <div class="social-container">
              <ul class="social-icons">
                <li><a href="#"><i class="fa fa-envelope"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram" style={{left: '15px', top: '12px'}}></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fa fa-github"></i></a></li>
              </ul>
            </div>
          </div>






        </div>

      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
