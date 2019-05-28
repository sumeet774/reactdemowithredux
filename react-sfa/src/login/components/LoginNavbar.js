import React, {Component} from 'react'

import {Navbar, Nav, Button} from 'react-bootstrap'


class LoginNavbar extends Component{
    render(){
        return(
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="custom-nav">
                <Navbar.Brand href="#">
                    C - Square<span className="seperator"></span>SFA
                </Navbar.Brand>
                
                <Nav className="ml-auto mobile-dropdown">
                    <Nav.Link href="#" className="contact-us">CONTACT US</Nav.Link>
                    <button className="demo-btn">DEMO</button>
                </Nav>

            </Navbar>
        )
    }
}

export default LoginNavbar