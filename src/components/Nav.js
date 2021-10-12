import { Container , Navbar, Nav, NavItem, Row} from 'react-bootstrap';
import {useEffect, useState} from "react";
import axios from 'axios';
import {withRouter} from "react-router"
import {Link, NavLink} from "react-router-dom"

function MyNav(props) {
    function setLocation(location){
        props.setLocation(location)
    }

    const textStyle = {
        fontSize: "1.5rem"
    }

    return (
        <div className="Nav">
            <Navbar collapseOnSelect bg="dark" fixed="top" expand="sm" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                        <Nav activeKey={props.location.pathname} style={textStyle}>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
                            <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>


                </Container>
            </Navbar>
        </div>
    );
}
const Navigation = withRouter(MyNav)

export default Navigation;
