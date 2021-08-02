import React from 'react'
import './signup.css'
import Navbar from '../../components/nav/Navbar'
import SignupForm from '../../components/signupForm/signupForm'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import HeroImage from '../../images/cerdos.jpg'


class Signup extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="loginForm">
                    <div className="content">
                        <SignupForm></SignupForm>
                    </div>
                <Navbar  theme={"Navbar"}></Navbar>
                <Hero  h={"100vh"} heroImage={HeroImage} w={"100%"}></Hero>
                </div>
            </React.Fragment>
        )
    }
}

export default Signup