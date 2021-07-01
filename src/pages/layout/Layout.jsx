import React from 'react'
import './Layout.css'
import Navbar from '../../components/nav/Navbar'

function Layout(props){
    return(
        <React.Fragment>
            <div className="Layout">
                <Navbar  theme={"Navbar__transparent"}></Navbar>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default Layout