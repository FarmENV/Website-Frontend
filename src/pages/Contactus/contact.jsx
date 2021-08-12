import React from 'react'
import './contact.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/nav/Navbar'
 
 
 
class Contactus extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div>
                <Navbar theme={"Navbar"}></Navbar>  
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
                <Footer s={{bottom:0}}></Footer>
            </React.Fragment>
        )
    }
}
 
export default Contactus     