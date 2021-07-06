import React from 'react'
import './LoginForm.css'
import Button from '../mainButton/MainButton'
import {Link} from 'react-router-dom'
import Logo from '../../images/logoComplete.png'

class LoginForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="LoginForm">
                    <form action="">
                        <div className="image__container">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Email
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
                        <Button theme={"ButtonForms"} contentText={'Log in'} link={"/"}></Button>
                        <div className="extra__links">
                            <a href="" className="new_password">
                                Forgot your password?
                            </a>
                            <p>New around? <Link to="/signup">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default LoginForm 