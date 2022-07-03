import Loader from 'react-loaders'
import './index.scss'
import './socials.scss'
import 'animate.css';
import './typewriteranimation.scss'
import { ReactComponent as Mouse } from '../icons/mouse.svg'


const Landing = () => {




  return (
    <>
      <div className="container home-page">
        <div className="text-zone">

          <div className="c1"><div class="type-1"> <h1>Hey!👋</h1><br></br></div></div>
          <div className="c2"><div class="type-2"><h1> I'm Omkaar Shenoy. </h1><br></br></div></div>
          <div className="c3"><div class="type-3">Student | Developer</div></div>
          




          <div class="shareone">
          
            <div class="wrapper">

              <div class="social-container">

                <ul class="social-icons">
                  <li class="icon email">
                    <span class="tooltip">Email</span>
                    <span> <a href="mailto:omkaarshenoyos@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa fa-at" style={{ left: '14px', top: '13px' }}></i></a></span>
                  </li>
                  <li class="icon instagram">
                    <span class="tooltip">Instagram</span>
                    <span> <a href="https://www.instagram.com/omkrshny/" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram" style={{ left: '14px', top: '13px' }}></i></a></span>
                  </li>
                  <li class="icon linkedin">
                    <span class="tooltip">Linkedin</span>
                    <span> <a href="https://www.linkedin.com/in/omkaarshenoy/"><i class="fa fa-linkedin" style={{ left: '14px', top: '13px' }} target="_blank" rel="noopener noreferrer"></i></a></span>
                  </li>
                  <li class="icon github">
                    <span class="tooltip">Github</span>
                    <span> <a href="https://www.github.com/OmkaarShenoy/"><i class="fa fa-github" style={{ left: '14px', top: '13px' }} target="_blank" rel="noopener noreferrer"></i></a></span>
                    
                  </li>
                </ul>

              </div>
            </div>
          </div>
          <div class="resume"><a href="https://github.com/OmkaarShenoy/Resume/raw/master/main.pdf" download="renamed.pdf"> Resume <i class="fa fa-download" style={{fontSize: '25px'}} rel="noopener noreferrer"></i></a></div>

        </div>
        

      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Landing
