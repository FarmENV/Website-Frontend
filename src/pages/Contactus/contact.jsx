import React from 'react'
import './contact.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/nav/Navbar'
 
 
 
class Contactus extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className="contact">
                <div className="sensors__content">
                     <Navbar theme={"Navbar"}></Navbar>  
                     </div>
                    <div className="Contact__content">
                        <div className="Contact__info">
                                <div className="questions__content">
                                    <h1>Comienza el cuidado de tus animales ahora!</h1>
                                    <p>Contacta con el equipo FarmENV para obtener el kit de sensores que mejorará la calidad de vida de tus animales.</p>
                                    <div className="Farm_email">
                                        <h5>farmenvironments@gmail.com</h5>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
 
                <div className="footer__Contentc">
                    <Footer s={{bottom:0}}></Footer>
                </div>
            </React.Fragment>
        )
    }
}
 
export default Contactus     