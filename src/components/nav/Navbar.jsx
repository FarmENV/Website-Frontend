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
              <Link className="nav__links">
                <p>Kits</p>
              </Link>
            </div>
            <div className="link">
              <Link className="nav__links">
                <p>Iniciar Sesión</p>
              </Link>
            </div>
            <div className="link">
              <Link className="nav__links">
                <p>Registrarse</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar