import React from 'react'
import './Profsettings.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/nav/Navbar'



class Profsettings extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className="content">
                <div className="profile__user">
                    <h2 className="user__name">User Name</h2>
                    <h3>Edit Profile</h3>
                    <h3 className="log__out">Log out</h3>
                </div>
                <div className="Prof__settings">
                <div className="text">
                <h1> Change password</h1>
                </div>
                <div className="options">
                <h4 className="old__password"> Old password</h4>
                <h4 className= "new__password"> New password</h4>
                <h4 className= "confirm__password"> Confirm new password</h4>
                </div>
                    <table>
                     <tr>
                    <td><input type="text" className="old__holder" /></td>
                     </tr>
                     <tr>
                    <td><input type="text" className="new__holder" /></td>
                    </tr>
                    <tr>
                    <td><input type="text" className="confirm__holder" /></td>
                     </tr>
                    </table>
                    <div className="edit__button">
                         <button className="button__accept">Accept changes</button>
                    </div>
                </div>
                </div>
                  <Navbar theme={"Navbar"}></Navbar>
            </React.Fragment>
        )
    }
}


export default Profsettings