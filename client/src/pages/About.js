import {Col, Container, Row, Image} from "react-bootstrap";
import me from "../imgs/me.jpg"
import {Bio, Skills} from "../text/Bio.js"
import {useEffect, useState} from "react";
import axios from 'axios';

function About() {
    const [languages, setLanguages] = useState([])
    const [technologies, setTechnologies] = useState([])


    useEffect(async() => {
        const response = await axios({url: "graphql", method: "post", data:{
            query: `
            query getInfo {
                languages {
                    title
                }
                technologies {
                  title
                }
              }
            `
        }})
        setLanguages(response.data.data.languages)
        setTechnologies(response.data.data.technologies)
    }, [])
    const rowStyle = {
        paddingBottom: "4vh"
    }
    const nameStyle = {
        paddingBottom: "2vh",
        textAlign: 'center'
    }
    const bioStyle = {
        textAlign: "left",
        paddingBottom: "1vh"
    }

    const skillHeaderStyle = {
        paddingBottom: "1vh",
        textAlign: 'center'
    }
    
    const skillStyle = {
        paddingBottom: "2vh",
        textAlign: 'center'
    }
    
    return (
        <div className="About">
            <Container>
                <Row id="mypic" className="justify-content-center" style={rowStyle}>
                    <Col xs={6} md={4}>
                        <Image src={me} roundedCircle fluid/>
                    </Col>
                </Row>
                <Row id="name">
                    <h1 style={nameStyle}><b>Grant Boicheff</b></h1>
                </Row>
                <Row id="bio" className="justify-content-center">
                    <Col xs={10} md={8}>
                        <p style={bioStyle}>{Bio}</p>
                    </Col>
                </Row>
                <Row id="languages header" className="justify-content-center">
                    <Col>
                        <h3 style={skillHeaderStyle}><b>Languages</b></h3>
                    </Col>
                </Row>
                <Row id="languages" className="justify-content-center">
                    <Col xs={10} md={8} style={skillStyle}>
                        {languages.map(language => language.title).join(", ")}
                    </Col>
                </Row>
                <Row id ="technologies header" className="justify-content-center">
                    <Col>
                        <h3 style={skillHeaderStyle}><b>Technologies</b></h3>
                    </Col>
                </Row>
                <Row id = "technologies" className="justify-content-center">
                    <Col xs={10} md={8} style={skillStyle}>
                        {technologies.map(tech => tech.title).join(", ")}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
