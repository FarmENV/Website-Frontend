import React from 'react'
import './signupForm.css'
import Button from '../mainButton/MainButton'
import {Link} from 'react-router-dom'
import Logo from '../../images/logoComplete.png'

class SignupForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="SignupForm">
                    <form action="">
                        <div className="image__container">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                First name:
                            </label>
                            <input 
                                type="text"
                                className="form-control" 
                                name="firstName"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Last name:
                            </label>
                            <input 
                                type="text"
                                className="form-control" 
                                name="lastName"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Username:
                            </label>
                            <input 
                                type="text"
                                className="form-control" 
                                name="username"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Email:
                            </label>
                            <input 
                                type="text"
                                className="form-control" 
                                name="email"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Password
                            </label>
                            <input 
                            type="password" 
                            className="form-control"
                            name="password"/>
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Password confirmation:
                            </label>
                            <input 
                            type="password" 
                            className="form-control"
                            name="password"/>
                        </div>
                        <Button theme={"ButtonForms"} contentText={'Sign up'} link={"/"}></Button>
                        
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default SignupForm 
