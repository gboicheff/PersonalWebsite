import {Container, Row} from "react-bootstrap";
import Project from "../components/Project.js"
import {useEffect, useState} from "react";
import axios from 'axios';
function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(async() => {
        const response = await axios({url: "graphql", method: "post", data:{
            query: `
            query getProjects {
                projects {
                  title
                  description
                  github_link
                  deployment_link
                  tags
                }
              }
            `
        }})
        setProjects(response.data.data.projects)
    }, [])

    const style={
        paddingTop: "12vh"
    }

    const projectsElems = (projects) => {
        return projects.map((project, index) => {
            return <Row key={index}><Project index={index} title={project.title} description={project.description} link={project.github_link} keywords={project.tags}/></Row>
        })
    }

    return (
        <div className="Project">
            <Container style={style}>
                {projects.length > 0 ? projectsElems(projects) : <h3>Loading projects...</h3>}
            </Container>
        </div>
    );
}

export default Projects;
