import React from 'react'
import './LandingPage.css'
import Hero from '../../components/hero/Hero'
import PigSilhouette from '../../images/pig.png'
import CameraSilhouette from '../../images/camera.png'
import Kit from '../../images/kit.png'
import Button from '../../components/mainButton/MainButton'

const LandingPage = props => {
  return(
    <React.Fragment>
      <div className="Landing">
        <div className="Landing__content font-face-ap">
          <h1 className="Landing__title">LA CALIDAD DE<br/>TU CUIDADO</h1>
        </div>
        <Hero h={'100vh'}></Hero>
        <div className="Info__content">
          <h3 className="Info__title font-face-ap">¿QUÉ ES FarmENV?</h3>
          <p className="Info__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend felis sapien, eget condimentum elit gravida sed. Ut sodales turpis eget lacinia ullamcorper. Donec luctus, augue et cursus semper, metus augue vehicula metus, non ultricies sem mi eget erat. Etiam blandit, nibh et hendrerit consectetur, elit neque tempor nunc, vestibulum fermentum orci neque sed ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra,</p>
        </div>
        <hr/>
        <div className="Info__content">
          <h3 className="Info__title font-face-ap">¿CÓMO FUNCTIONA?</h3>
          <p className="Info__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend felis sapien, eget condimentum elit gravida sed. Ut sodales turpis eget lacinia ullamcorper. Donec luctus, augue et cursus semper, metus augue vehicula metus, non ultricies sem mi eget erat. Etiam blandit, nibh et hendrerit consectetur, elit neque tempor nunc, vestibulum fermentum orci neque sed ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra,</p>
          <div className="silhouettes">
            <img src={PigSilhouette} alt="pig"/>
            <img src={CameraSilhouette} alt="camera" />
          </div>
        </div>
        <hr/>
        <div className="Info__content_kit">
          <div className="Info__kit_img">
            <img src={Kit} alt="kit"/>
          </div>
          <div className="Info__kit_info">
            <h3 className="Info__title_kit font-face-ap">KIT DE SENSORES</h3>
            <p className="Info__paragraph_kit">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend felis sapien, eget condimentum elit gravida sed. Ut sodales turpis eget lacinia ullamcorper. Donec luctus, augue et cursus semper, metus augue vehicula metus, non ultricies sem mi eget erat. Etiam blandit, nibh et hendrerit consectetur, elit neque tempor nunc, vestibulum fermentum orci neque sed ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra,</p>
            <Button theme={"Button"} contentText={'INFORMACION DEL KIT'} link={"/"}></Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LandingPage