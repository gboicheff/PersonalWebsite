import {Col, Container, Row, Card, Button} from "react-bootstrap";
import { ProjectList } from "../text/ProjectList.js"
import Project from "../components/Project.js"

function Projects() {
    const style={
        paddingTop: "12vh"
    }
    const projects = ProjectList.map(project => {
        return <Row><Project title={project.title} description={project.description} link={project.link} keywords={project.keywords}/></Row>
    })
    return (
        <div className="Project">
            <Container style={style}>
                {projects}
            </Container>
        </div>
    );
}

export default Projects;
