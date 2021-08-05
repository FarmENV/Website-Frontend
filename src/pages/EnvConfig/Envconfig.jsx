import React from 'react'
import './Envconfig.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/nav/Navbar'



class Envconfig extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="content">
                        <div className="profile__user">
                            <h2 className="user__name">User Name</h2>
                            <h3>Edit Profile</h3>
                            <h3 className="log__out">Log out</h3>
                        </div>
                        <div className="env__title">
                            <h1 className="env__name">Environment name</h1>
                        </div>
                        <div className="env__Variables">
                            <div className="back_color">
                                 <div className="edit__button">
                                     <button className="button__edit">Click to edit</button>
                                 </div>
                            </div>
                            <div className="measurement">
                                <div className="max__value">
                                    <h3 >Max.</h3>
                                </div>
                                <div className="min__value">
                                    <h3 >Min.</h3>
                                </div>
                                <table>
                                <tr>
                                    <td> <h3>Humidity</h3></td>
                                    <td><input type="text" className="edit__measurement" /></td>
                                    <td><input type="text" className="edit__measurement" /></td>
                                </tr>
                                <tr>
                                    <td> <h3>Temperature</h3></td>
                                    <td><input type="text" className="edit__measurement" /></td>
                                    <td><input type="text" className="edit__measurement" /></td>
                                </tr>
                                <tr>
                                    <td> <h3>Air quality</h3></td>
                                    <td><input type="text" className="edit__measurement" /></td>
                                    <td><input type="text" className="edit__measurement" /></td>
                                </tr>
                                <tr>
                                    <td> <h3>Food</h3></td>
                                    <td><input type="text" className="edit__measurement" /></td>
                                    <td><input type="text" className="edit__measurement" /></td>
                                </tr>
                                </table>
                                <div className="accept__option">
                                    <h4>Accept changes</h4>
                                 </div>
                            </div>
                        </div>
                </div>




                <Navbar theme={"Navbar"}></Navbar>
            </React.Fragment>
        )
    }
}


export default Envconfig