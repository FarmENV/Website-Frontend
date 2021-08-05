import React from 'react'
import './ProfilEnv.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/nav/Navbar'


class Envprofile extends React.Component {
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
                        <div className="env__variables">
                            <div className="back_color">
                           <table className="table__var">
                             <tr>
                                 <td> <h2>Humidity</h2></td>
                                 <td> <h2>20%</h2></td>
                             </tr>
                             <tr>
                                 <td className="column"> <h2>Temperature</h2></td>
                                 <td className="column"> <h2>30°C</h2></td>
                             </tr>
                             <tr>
                             <td className="column"> <h2>Air quality</h2></td>
                             <td className="column"> <h2> Good</h2></td>
                             </tr>
                             <tr>
                             <td className="column"> <h2>Food</h2></td>
                             <td className="column"> <h2> 2kg</h2></td>
                             </tr>
                         </table>
                         <div className="edit__button">
                         <button className="button__edit">Edit</button>
                         </div>
                         </div>
                        </div>
                </div>
                <Navbar theme={"Navbar"}></Navbar>
            </React.Fragment>
        )

    }

}
export default Envprofile