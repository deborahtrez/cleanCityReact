import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    
    render() {
        return (
            <nav  id="navbar" >

                <div  className="collapse navbar-collapse" id="navbarNav">
                

                    <ul className="navbar-nav mx-auto">
                        <Link to="/home" >Home</Link>
                        <Link to="/servicerequest"> Service Request</Link>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;