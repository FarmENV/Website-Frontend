import React from 'react'
import './newEnvForm.css'
import {Link} from 'react-router-dom'
import Button from '../mainButton/MainButton'

class NewEnvForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="LoginForm">
                    <form action="">
                        <div className="div__title">
                            <h1 className="Environ__text">New Environment</h1>
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-2">
                                Environment name:
                            </label>
                            <input 
                                type="text"
                                className="form-control" 
                                name="email"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-2">
                                Environment type:
                            </label>
                            <select name="select" className="form-control">
                                <option value="value1">Value 1</option>
                                <option value="value2">Value 2</option>
                                <option value="value3">Value 3</option>
                            </select>
                        </div>
                        <Button theme={"ButtonForms"} contentText={'Create'} link={"/"}></Button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default NewEnvForm