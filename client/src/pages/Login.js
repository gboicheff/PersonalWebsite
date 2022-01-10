import {Col, Container, Row, Form, Button} from "react-bootstrap";

function Login() {
    return (
        <div className="Blog">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={6}>
                    <Form>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;