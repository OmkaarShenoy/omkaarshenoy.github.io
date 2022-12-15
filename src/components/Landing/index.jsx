import Loader from 'react-loaders'
import './index.scss'
import './socials.scss'
import 'animate.css';
import './typewriteranimation.scss'
import { ReactComponent as Mouse } from '../icons/mouse.svg'
import {Link} from 'react-scroll'

const Landing = () => {




  return (
    <>
      <div className="container home-page">
        <div className="text-zone">

          <div className="c1"><div className="type-1"> <h1>Hey!</h1><br></br></div></div>
          <div className="c2"><div className="type-2"><h1> I'm Omkaar Shenoy. </h1><br></br></div></div>
          <div className="c3"><div className="type-3">Student | Developer</div></div>
                    
          <div className="shareone">
          
            <div className="wrapper">

              <div className="social-container">

                <ul className="social-icons">
                  <li className="icon email">
                    <span className="tooltip">Email</span>
                    <span> <a href="mailto:omkaarshenoyos@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-at" style={{ left: '14px', top: '13px' }}></i></a></span>
                  </li>
                  <li className="icon instagram">
                    <span className="tooltip">Instagram</span>
                    <span> <a href="https://www.instagram.com/omkrshny/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" style={{ left: '14px', top: '13px' }}></i></a></span>
                  </li>
                  <li className="icon linkedin">
                    <span className="tooltip">Linkedin</span>
                    <span> <a href="https://www.linkedin.com/in/omkaarshenoy/"><i className="fa fa-linkedin" style={{ left: '14px', top: '13px' }} target="_blank" rel="noopener noreferrer"></i></a></span>
                  </li>
                  <li className="icon github">
                    <span className="tooltip">Github</span>
                    <span> <a href="https://www.github.com/OmkaarShenoy/"><i className="fa fa-github" style={{ left: '14px', top: '13px' }} target="_blank" rel="noopener noreferrer"></i></a></span>
                    
                  </li>
                </ul>

              </div>
            </div>
          </div>
          <div className="resume"><a href="https://docdro.id/tcJMpB2" target="_blank"> Resume <i className="fa fa-download" style={{fontSize: '25px'}} rel="noopener noreferrer"></i></a></div>

        </div>
        {<div className="scroll"><Link  to="experiences" spy={true} smooth={true}><Mouse  width="85px "fill="#BB3EF6" /></Link></div>}


      </div>

    </>
  )
}

export default Landing
