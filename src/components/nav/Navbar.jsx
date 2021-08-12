import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
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
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/faq" className="nav__links">
                <p style={{'fontSize': '16px'}}>FAQ |</p>
              </Link>
            </div>
            <div className="link" >
              <Link style={{ textDecoration: 'none', color: 'white' }} to="sensorKits" className="nav__links">
                <p style={{'fontSize': '16px'}}>Kits |</p>
              </Link>
            </div>
            <div className="link" >
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/help" className="nav__links">
                <p style={{'fontSize': '16px'}}>Ayuda |</p>
              </Link>
            </div>
            <div className="link" >
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact"className="nav__links">
                <p style={{'fontSize': '16px'}}>Contacto |</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar