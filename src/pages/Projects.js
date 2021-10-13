import {Col, Container, Row, Card, Button} from "react-bootstrap";
import "../text/ProjectList.js"
function Projects() {
    const style={
        paddingTop: "20vh"
    }
    return (
        <div className="Blog">
            <Container>
                <Row className="justify-content-center" style={style}>
                    <Col xs={6}>
                        <h1>Coming soon...</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projects;
