import {Button, Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";

function Blog() {
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

export default Blog;
