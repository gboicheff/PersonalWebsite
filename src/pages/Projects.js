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
                    <Col xs={10}>
                    <Card className="bg-dark text-white">
                    <Card.Img src="holder.js/100px270" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projects;
