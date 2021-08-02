import React from 'react'
import './UserProfile.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/nav/Navbar'
import HeroImage from '../../images/cerdos.jpg'
import Hero from '../../components/hero/Hero'

class UserProfile extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="userProfile">
                    <div className="Landing__content">
                        <div className="user__Pro">
                            <h2 className="user__Title">User Name</h2>
                            <h3>Edit Profile</h3>
                            <h3 className="log__out">Log out</h3>
                        </div>
                        <div className="Environment_sett">
                            <h1 className="title__Env">Your environments:</h1>
                            <div className="environment_one">
                                <br />
                                <div className="environ__Pic">
                                    
                                </div>
                            </div>
                            <div className="environment_one">
                            <br />
                                <div className="environ__Pic">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Navbar theme={"Navbar"}></Navbar>
                
                
            </React.Fragment>
        )
    }
}

export default UserProfile