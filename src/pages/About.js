import {Col, Container, Row, Image} from "react-bootstrap";
import me from "../imgs/me.jpg"
import {Bio, Skills} from "../text/Bio.js"

function About() {
    const rowStyle = {
        paddingTop: "8vh",
        paddingBottom: "4vh"
    }
    const nameStyle = {
        paddingBottom: "2vh"
    }
    const bioStyle = {
        textAlign: "left",
        paddingBottom: "1vh"
    }

    const skillHeaderStyle = {
        paddingBottom: "1vh"
    }
    
    const skillStyle = {
        // textAlign: "left",
        paddingBottom: "2vh"
    }
    
    return (
        <div className="About">
            <Container>
                <Row className="justify-content-center" style={rowStyle}>
                    <Col xs={6} md={4}>
                        <Image src={me} roundedCircle fluid/>
                    </Col>
                </Row>
                <Row>
                    <h1 style={nameStyle}><b>Grant Boicheff</b></h1>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={10} md={8}>
                        <p style={bioStyle}>{Bio}</p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <h3 style={skillHeaderStyle}><b>Languages</b></h3>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={10} md={8} style={skillStyle}>
                        {Skills.languages.join(", ")}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <h3 style={skillHeaderStyle}><b>Technologies</b></h3>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={10} md={8} style={skillStyle}>
                        {Skills.technologies.join(", ")}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
