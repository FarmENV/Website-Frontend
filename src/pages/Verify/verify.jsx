import React from 'react'
import './verify.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/nav/Navbar'
import Button from '../../components/mainButton/MainButton'
 

class Verification extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div>
                <div>
                     <Navbar theme={"Navbar"}></Navbar>  
                </div>
                    <div className="Contact__content">
                        <div className="Verify__info">
                            <div className="questions__content">
                                <h1>¡Felicidades!</h1>
                                <p>Te haz verificado correctamente</p>
                                <div className="Farm_email">
                                    <Button  theme={"Button"} contentText={'REDIRECCIONAR AL INICIO'} link={"/"}></Button>
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
     
    export default Verification