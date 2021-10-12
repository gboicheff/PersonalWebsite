import { Container , Navbar, Nav, Image} from 'react-bootstrap';
import {withRouter} from "react-router"
import {NavLink} from "react-router-dom"
import GithubIcon from "../imgs/GitHub-Mark-Light-64px.png"


function MyNav(props) {

    const textStyle = {
        fontSize: "1.5rem"
    }

    const imageStyle = {
        width: "32px",
        height: "32px"
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
                            <Nav.Link href="https://github.com/gboicheff"><Image style={imageStyle} src={GithubIcon} fluid/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
const Navigation = withRouter(MyNav)

export default Navigation;
