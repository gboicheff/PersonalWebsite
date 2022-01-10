import { Card, Button, Image} from 'react-bootstrap';
import GithubIcon from "../imgs/GitHub-Mark-Light-64px.png"

function Project(props) {
    const style = {
        marginTop: "2vh",
        marginBottom: "2vh"
    }
    const imageStyle = {
        width: "32px",
        height: "32px",
        marginLeft: "1rem"
    }
    return (
        <div className="Project" style={style}>
            <Card bg="dark" variant="dark" className="text-center">
            <Card.Body>
                <Card.Title><b><h2>{props.title}<a href={props.link}><Image style={imageStyle} src={GithubIcon} fluid/></a></h2></b></Card.Title>
                <Card.Text>
                {props.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted" >{props.keywords.join(", ")}</Card.Footer>
            </Card>
        </div>
    );
}

export default Project;
