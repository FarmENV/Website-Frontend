import React from 'react';
import './freQuestions.css';
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/nav/Navbar'

class freQuestions extends React.Component {
    render() {
        return (
            <React.Fragment>
                
                <div className="ques">
                    <div className="Questions__content">        
                <Navbar theme={"Navbar"}></Navbar>
                        <div className="Questions">
                            <h3>¿Puedo tener varios kits en la aplicación móvil?</h3>
                            <p>La aplicación movil de FarmENV te permite tener uno o más kits. <br />Al comprar varios sistemas puedes registrarlos desde tu dispositivo.</p>
                            <hr />
                            <h3>¿Es posible cambiar el ID de mi arduino?</h3>
                            <p>No es posible, el ID se encuentra en el código del arduino, ya que cada uno es único para cada arduino.</p>
                            <hr />
                            <h3>¿Puedo revisar mis ambientes en diferentes dispositivos y cuentas?</h3>
                            <p>FarmENV te permite revisar tus ambientes desde cualquier dispositivo o cuenta. <br /> Sin embargo solo puedes editar tus ambientes desde tu propia cuenta. </p>
                            <hr />
                            <h3>¿Es posible cambiar los sensores de mi sistema?</h3>
                            <p>Para que esto sea posible el sensor debe ser del mismo modelo que el anterior por el cual lo desea cambiar</p>
                            <hr />
                            <h3>¿Qué pasa si registro mal el ID de mi sistema?</h3>
                            <p>Si es equivocado, se te notificará para que puedar modificarlo o eliminar el sistema ya registrado.</p>
                        </div>
                    </div>
                <Footer></Footer>
                </div>
                
            </React.Fragment>
        )
    }
}

export default freQuestions