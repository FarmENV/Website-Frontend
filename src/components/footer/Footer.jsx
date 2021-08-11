import React from 'react'
import './Footer.css'
import FooterLogo from '../../images/farmlogo.png'
import Facebook from '../../images/faceIcon.png'
import Twitter from '../../images/instaIcon.png'
import Instagram from '../../images/twitterIcon.png'

const Footer = (props) => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
              <img src={FooterLogo} alt="Logo" className="img"/>
          </div>
          <div className="col">
            <h1 style={{"marginLeft":"25px"}}>Redes Sociales</h1>
              <tr>
                <th><img src={Facebook} alt="Facebook" className="social-img"/></th>
                <th><img src={Instagram} alt="Instagram" className="social-img"/></th>
                <th><img src={Twitter} alt="Twitter" className="social-img"/></th>
              </tr>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} FARMENV | DERECHOS Reservados |
            Terminos Y Condiciones | Privacidad
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;