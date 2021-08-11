import React from 'react'
import './LandingPage.css'
import Hero from '../../components/hero/Hero'
import PigSilhouette from '../../images/pig.png'
import CameraSilhouette from '../../images/camera.png'
import Kit from '../../images/kit.png'
import Button from '../../components/mainButton/MainButton'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/nav/Navbar'
import HeroImage from '../../images/chickenBackg.jpeg'

const LandingPage = props => {
  return(
    <React.Fragment>
      <div className="Landing">
        <div className="Landing__content">
          <h1 className="Landing__title" style={{'fontSize': '110px'}}>LA CALIDAD DE<br/>TU CUIDADO</h1>
        </div>
      <Navbar theme={"Navbar__transparent"}></Navbar>
      <Hero heroImage={HeroImage} h={'100vh'} w={"100%"}></Hero>
        <div className="Info__content_whatis">
          <h3 className="Info__title">¿QUÉ ES FarmENV?</h3>
          <p className="Info__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend felis sapien, eget condimentum elit gravida sed. Ut sodales turpis eget lacinia ullamcorper. Donec luctus, augue et cursus semper, metus augue vehicula metus, non ultricies sem mi eget erat. Etiam blandit, nibh et hendrerit consectetur, elit neque tempor nunc, vestibulum fermentum orci neque sed ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra,</p>
        </div>
        <hr id="estiloHR"/>
        <div className="Info__content">
          <h3 className="Info__title">¿CÓMO FUNCIONA?</h3>
          <p className="Info__paragraph">Para el funcionamiento de nuestro producto, nosotros te proveemos de un sistema de sensores conectado a internet con el que podrás monitorear las condiciones en las que se encuentra el entorno donde fue instalado desde tu smartphone. Nuestro software está diseñado para indicarte cuando los niveles de alguna de sus mediciones puede ser peligroso para tus animales o ponerlos en un estado de estrés. Éstas indicaciones están predefinidas dependiendo del tipo de animal que tengas en tu corral, pudiendo elegir entre vacas, cerdos, caballos y gallinas.</p>
          <div className="silhouettes">
            <img src={PigSilhouette} alt="pig"/>
            <img src={CameraSilhouette} alt="camera" />
          </div>
        </div>
        <hr id="estiloHR"/>
        <div className="Info__content_kit">
          <div className="Info__kit_img">
            <img src={Kit} alt="kit"/>
          </div>
          <div className="Info__kit_info">
            <h3 className="Info__title">KIT DE SENSORES</h3>
            <p className="Info__paragraph_kit">Nuestro kit contiene los sensores necesarios para asegurar la seguridad y comodidad de tus animales, permitiendo medir la temperatura, la humedad, la calidad del aire y la cantidad de comida restante en tu corral. Los sensores están conectados a un dispositivo arduino UNO, que gracias a un módulo wifi podrá enviar los datos recolectados a nuestra base de datos desde donde podrán ser accesados por tu dispositivo móvil.</p>
            <Button theme={"Button"} contentText={'INFORMACION DEL KIT'} link={"/sensorKits"}></Button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default LandingPage