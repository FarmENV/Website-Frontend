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
      </div>
    </React.Fragment>
  )
}

export default Navbar