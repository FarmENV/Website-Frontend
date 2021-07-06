import React from 'react'
import './Login.css'
import Navbar from '../../components/nav/Navbar'
import LoginForm from '../../components/loginForm/LoginForm'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import HeroImage from '../../images/cerdos.jpg'


class Login extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="loginForm">
                    <div className="content">
                        <LoginForm></LoginForm>
                    </div>
                <Navbar  theme={"Navbar"}></Navbar>
                <Hero  h={"100vh"} heroImage={HeroImage} w={"100%"}></Hero>
                </div>
            </React.Fragment>
        )
    }
}

export default Login