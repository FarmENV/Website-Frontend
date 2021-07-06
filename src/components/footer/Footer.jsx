import React from 'react'
import './Footer.css'
import FarmLogo from '../../images/farmlogo.png'

const Footer = (props) => {
  return (
    <React.Fragment>
      <div className="Footer" style={props.s}>
        <div className="footer__content">
          <div className="footer__element">
            <img src={FarmLogo} alt="Logo" />
          </div>
          <div className="footer__element">
            <h1>Redes Sociales</h1>
          </div>
          <div className="footer__element">
            <p>Avisos Legales</p>
            <p>Terminos y Condiciones</p>
            <p>FAQ</p>
            <p>Seguridad</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer