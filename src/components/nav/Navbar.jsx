import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import freQuestions from '../../pages/FrequentQuestions/freQuestions'
import Logo from '../../images/logoComplete.png'

const Navbar = props => {
  return(
    <React.Fragment>
      <div className={props.theme}>
        <Link to="/">
          <img src={Logo} alt="FarmENV_Logo"/>
        </Link>
        <div className="links">
          <div className="Links__list mt-4">
          <div className="link">
              <Link to="/faq" className="nav__links">
                <p>Preguntas frecuentes</p>
              </Link>
            </div>
            <div className="link" >
              <Link className="nav__links">
                <p>Kits</p>
              </Link>
            </div>
            <div className="link" >
              <Link to="/login" className="nav__links">
                <p>Ayuda</p>
              </Link>
            </div>
            <div className="link" >
              <Link  to="/signup"className="nav__links">
                <p>Contacto</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar