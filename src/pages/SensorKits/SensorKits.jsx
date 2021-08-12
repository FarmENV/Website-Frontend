import React from 'react'
import './SensorKits.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/nav/Navbar'
import ImageSlider from '../../components/carousel/ImageSlider'
import { SliderData } from '../../components/carousel/SliderData'

class KitsSensor extends React.Component {
  render(){
    return(
      <React.Fragment>
        <div>
          <div className="Sensor__content">
              <h1 className="Sensor__title">Sensores dentro del kit</h1>
          </div>
        <Navbar theme={"Navbar"}></Navbar>
        <ImageSlider slides={SliderData}></ImageSlider>
            <div className="Info__sensor_in">
              <h3 className="Info__title_sensor ">Sensor de temperatura y humedad</h3>
              <p className="Info__paragraph_kit">El DHT11 es un sensor digital de temperatura y humedad relativa de bajo costo y fácil uso. Integra un sensor capacitivo de humedad y un termistor para medir el aire circundante, y muestra los datos mediante una señal digital</p>
            </div>
            <hr id="styleHR"/>
            <div className="Info__sensor_info">
              <h3 className="Info__title_sensor ">Sensor de Gas</h3>
              <p className="Info__paragraph_kit">El MQ2 es un sensor de gas inflamable y humo que detecta las concentraciones de gas combustible en el aire y emite su lectura como un voltaje analógico. El sensor puede medir concentraciones de gas inflamable de 300 a 10.000 ppm. El sensor de gas MQ-2 es Sensibles al GLP, i-butano, propano, metano, alcohol, hidrógeno y humo. Se utilizan en equipos de detección de fugas de gas en la familia y la industria y en detectores portátiles de gas.</p>
            </div>
            <hr id="styleHR"/>
            <div className="Info__sensor_info">
              <h3 className="Info__title_sensor ">Sensor de Fuerza</h3>
              <p className="Info__paragraph_kit">Este es un sensor de presión en la región de la película FSR que se convierte en un cambio en el valor de resistencia, para obtener así información de presión.</p>
            </div>
        <Footer></Footer>
        </div>
      
      </React.Fragment>
    )
  }
}

export default KitsSensor