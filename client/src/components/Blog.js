import { Card, Button, Image} from 'react-bootstrap';
import GithubIcon from "../imgs/GitHub-Mark-Light-64px.png"
import readingTime from "reading-time";
import {useEffect, useState} from "react";

function Blog(props) {
    const style = {
        marginTop: "2vh",
        marginBottom: "2vh"
    }
    const imageStyle = {
        width: "32px",
        height: "32px",
        marginLeft: "1rem"
    }

    const [stats, setStats] = useState([])
    useEffect(() => {
        if(props.text){
            setStats(readingTime(props.text))
        }
    }, [props.text])


    return (
        <div className="Blog" style={style}>
            <Card className="text-center" bg="dark" variant="dark">
            <Card.Body>
                <Card.Title><b><h2>{props.title}</h2></b></Card.Title>
                <Card.Text>
                {props.description}
                </Card.Text>
                <Button variant="primary" href={"/blog/" + props.id}>{stats.text}</Button>
            </Card.Body>
            <Card.Footer className="text-muted">{props.tags.join(", ")}</Card.Footer>
            </Card>
        </div>
    );
}

export default Blog;
