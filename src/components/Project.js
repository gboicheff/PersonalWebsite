import { Card, Button } from 'react-bootstrap';
import GithubIcon from "../imgs/GitHub-Mark-Light-64px.png"

function Project(props) {
    const style = {
        marginTop: "2vh",
        marginBottom: "2vh"
    }
    return (
        <div className="Project" style={style}>
            <Card className="text-center" bg="dark" variant="dark">
            <Card.Body>
                <Card.Title><b><h2>{props.title}</h2></b></Card.Title>
                <Card.Text>
                {props.description}
                </Card.Text>
                <Button variant="primary" href={props.link}>Check it out</Button>
            </Card.Body>
            <Card.Footer className="text-muted">{props.keywords.join(", ")}</Card.Footer>
            </Card>
        </div>
    );
}

export default Project;
