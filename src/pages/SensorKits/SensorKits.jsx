import React from 'react'
import './SensorKits.css'
import Temperature from '../../images/temperature.jpg'
import Gas from '../../images/gas.jpg'
import Force from '../../images/force.jpg'
import Humidity from '../../images/humididy.jpg'
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
            <h3 className="Info__title_sensor font-face-ap">SENSOR de temperatura</h3>
            <p className="Info__paragraph_kit">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend felis sapien, eget condimentum elit gravida sed. Ut sodales turpis eget lacinia ullamcorper. Donec luctus, augue et cursus semper, metus augue vehicula metus, non ultricies sem mi eget erat. Etiam blandit, nibh et hendrerit consectetur, elit neque tempor nunc, vestibulum fermentum orci neque sed ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra,</p>
          </div>
        </div>
        <div className="Info__content_kit">
        <div className="Info__sensor_img" >
            <img src={Humidity} alt="kit" width="60%" height="60%"/>
          </div>
          <div className="Info__sensor_info">
            <h3 className="Info__title_sensor font-face-ap">Sensor de Humedad</h3>
            <p className="Info__paragraph_kit">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend felis sapien, eget condimentum elit gravida sed. Ut sodales turpis eget lacinia ullamcorper. Donec luctus, augue et cursus semper, metus augue vehicula metus, non ultricies sem mi eget erat. Etiam blandit, nibh et hendrerit consectetur, elit neque tempor nunc, vestibulum fermentum orci neque sed ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra,</p>
          </div>
        </div>
        <div className="Info__content_kit">
        <div className="Info__sensor_img" >
            <img src={Gas} alt="kit" width="60%" height="60%"/>
          </div>
          <div className="Info__sensor_info">
            <h3 className="Info__title_sensor font-face-ap">Sensor de Gas</h3>
            <p className="Info__paragraph_kit">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend felis sapien, eget condimentum elit gravida sed. Ut sodales turpis eget lacinia ullamcorper. Donec luctus, augue et cursus semper, metus augue vehicula metus, non ultricies sem mi eget erat. Etiam blandit, nibh et hendrerit consectetur, elit neque tempor nunc, vestibulum fermentum orci neque sed ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra,</p>
          </div>
        </div>
        <div className="Info__content_kit">
        <div className="Info__sensor_img" >
            <img src={Force} alt="kit" width="80%" height="80%"/>
          </div>
          <div className="Info__sensor_info">
            <h3 className="Info__title_sensor font-face-ap">Sensor de Gas</h3>
            <p className="Info__paragraph_kit">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend felis sapien, eget condimentum elit gravida sed. Ut sodales turpis eget lacinia ullamcorper. Donec luctus, augue et cursus semper, metus augue vehicula metus, non ultricies sem mi eget erat. Etiam blandit, nibh et hendrerit consectetur, elit neque tempor nunc, vestibulum fermentum orci neque sed ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra,</p>
          </div>
        </div>
      </div>
      <Footer s={{bottom:0}}></Footer>
    </React.Fragment>
  )
}
}

export default KitsSensor