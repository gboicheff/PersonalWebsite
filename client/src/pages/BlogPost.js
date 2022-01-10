import {Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from 'axios';
import { useParams } from "react-router";
import ReactMarkdown from 'react-markdown';

function BlogPost() {
    const [blog, setBlog] = useState([])
    const { id } = useParams()

    useEffect(async() => {
        const response = await axios({url: "/graphql", method: "post", data:{
            query: `
            query GetBlog {
                getBlog(id: "`+ id + `") {
                  title
                  description
                  text
                  tags
                }
              }
            `
        }})
        setBlog(response.data.data.getBlog)
    }, [])


    const md_test = `### Hello, *world*!\ntest`
    return (
        <div className="BlogPost">
            <Container>
                <Row><h1>{blog.title}</h1></Row>
                <Row><ReactMarkdown children={blog.text}/></Row>
            </Container>
        </div>
    );
}

export default BlogPost;
