import './index.scss'
import './socials.scss'
import './typewriteranimation.scss'
import 'animate.css'
import { ReactComponent as Mouse } from '../icons/mouse.svg'
import { Link } from 'react-scroll'

const Landing = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1> Omkaar Shenoy. </h1>
          <div></div>
          <div className="shareone">
            <div className="wrapper">
              <div className="social-container">
                <ul className="social-icons">
                  <li className="icon email">
                    <span className="tooltip">Email</span>
                    <span>
                      {' '}
                      <a
                        href="mailto:omkaarshenoyos@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fa fa-at"
                          style={{ left: '14px', top: '13px' }}
                        ></i>
                      </a>
                    </span>
                  </li>
                  <li className="icon instagram">
                    <span className="tooltip">Instagram</span>
                    <span>
                      {' '}
                      <a
                        href="https://www.instagram.com/omkrshny/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fa fa-instagram"
                          style={{ left: '14px', top: '13px' }}
                        ></i>
                      </a>
                    </span>
                  </li>
                  <li className="icon linkedin">
                    <span className="tooltip">Linkedin</span>
                    <span>
                      {' '}
                      <a href="https://www.linkedin.com/in/omkaarshenoy/">
                        <i
                          className="fa fa-linkedin"
                          style={{ left: '14px', top: '13px' }}
                          target="_blank"
                          rel="noopener noreferrer"
                        ></i>
                      </a>
                    </span>
                  </li>
                  <li className="icon github">
                    <span className="tooltip">Github</span>
                    <span>
                      {' '}
                      <a href="https://www.github.com/OmkaarShenoy/">
                        <i
                          className="fa fa-github"
                          style={{ left: '14px', top: '13px' }}
                          target="_blank"
                          rel="noopener noreferrer"
                        ></i>
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="resume">
            <a
              href="https://docdro.id/tcJMpB2"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              Resume{' '}
              <i
                className="fa fa-download"
                style={{ fontSize: '25px' }}
                rel="noopener noreferrer"
              ></i>
            </a>
          </div>
          <div>
            <h3>
              Hello! My name is{' '}
              <span style={{ color: 'white', fontWidth: '900px  ' }}>
                Omkaar
              </span>
              , and I am an passionate student of Computer Science at{' '}
              <span style={{ color: 'white', fontWidth: '900px  ' }}>
                Arizona State University{' '}
              </span>{' '}
              <span>
                <img
                  style={{ width: '32px' }}
                  src=" https://i.ibb.co/jzXn3nt/asu.png"
                  alt="asu logo"
                  border="0"
                />
              </span>
              . I am keen on working with technology, data, and its capability
              to tackle real-world challenges.{' '}
            </h3>
            <h3>
              Previously, I have worked at{' '}
              <span style={{ color: 'white', fontWidth: '900px  ' }}>
                {' '}
                National Public Radio{' '}
              </span>
              <span>
                {' '}
                <img
                  style={{ width: '40px' }}
                  src="https://i.ibb.co/cyBT2Fs/npr.png"
                  alt="npr logo"
                  border="0"
                />{' '}
              </span>{' '}
              as Software Developer Intern on the Web Team.
            </h3>
            <h3>Scroll down to learn more about me!</h3>
          </div>
        </div>
        {
          <div className="scroll">
            <Link to="aboutme" spy={true} smooth={true}>
              <Mouse width="85px " fill="#BB3EF6" />
            </Link>
          </div>
        }
      </div>
    </>
  )
}

export default Landing
