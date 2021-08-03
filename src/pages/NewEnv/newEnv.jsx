import React from 'react'
import Navbar from '../../components/nav/Navbar'
import './newEnv.css'
import NewEnvForm from '../../components/newEnvForm/newEnvForm'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import HeroImage from '../../images/cerdo.png'


class NewEnv extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="loginForm">
                    <div className="content">
                        <NewEnvForm></NewEnvForm>
                    </div>
                <Navbar  theme={"Navbar"}></Navbar>
                <Hero  h={"100vh"} heroImage={HeroImage} w={"100%"}></Hero>
                </div>
            </React.Fragment>
        )
    }
}

export default NewEnv