import React from 'react'
import './SensorKits.css'
import Temperature from '../../images/temperature.jpg'
import Gas from '../../images/gas.jpg'
import Force from '../../images/force.jpg'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/nav/Navbar'


class KitsSensor extends React.Component {
    render(){
  return(
    <React.Fragment>
      <div className="Landing">
        <div className="sensors__content">
            <Navbar theme={"Navbar"}></Navbar>  
        </div>
        <div className="Info__content_kit">
        <div className="Info__sensor_img" >
            <img src={Temperature} alt="kit" width="70%" height="70%"/>
          </div>
          <div className="Info__sensor_info">
            <h3 className="Info__title_sensor font-face-ap">Sensor de temperatura</h3>
            <p className="Info__paragraph_kit">El DHT11 es un sensor digital de temperatura y humedad relativa de bajo costo y fácil uso. Integra un sensor capacitivo de humedad y un termistor para medir el aire circundante, y muestra los datos mediante una señal digital</p>
          </div>
        </div>
        <div className="Info__content_kit">
        <div className="Info__sensor_img" >
            <img src={Gas} alt="kit" width="60%" height="60%"/>
          </div>
          <div className="Info__sensor_info">
            <h3 className="Info__title_sensor font-face-ap">Sensor de Gas</h3>
            <p className="Info__paragraph_kit">El MQ2 es un sensor de gas inflamable y humo que detecta las concentraciones de gas combustible en el aire y emite su lectura como un voltaje analógico. El sensor puede medir concentraciones de gas inflamable de 300 a 10.000 ppm. El sensor de gas MQ-2 es Sensibles al GLP, i-butano, propano, metano, alcohol, hidrógeno y humo. Se utilizan en equipos de detección de fugas de gas en la familia y la industria y en detectores portátiles de gas.</p>
          </div>
        </div>
        <div className="Info__content_kit">
        <div className="Info__sensor_img" >
            <img src={Force} alt="kit" width="80%" height="80%"/>
          </div>
          <div className="Info__sensor_info">
            <h3 className="Info__title_sensor font-face-ap">Sensor de Fuerza</h3>
            <p className="Info__paragraph_kit">Este es un sensor de presión en la región de la película FSR que se convierte en un cambio en el valor de resistencia, para obtener así información de presión.</p>
          </div>
        </div>
      </div>
      <Footer s={{bottom:0}}></Footer>
    </React.Fragment>
  )
}
}

export default KitsSensor