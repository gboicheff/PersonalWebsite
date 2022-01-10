import {Container, Row} from "react-bootstrap";
import Blog from "../components/Blog.js"
import {useEffect, useState} from "react";
import axios from 'axios';

function Blogs() {
    const [blogs, setBlogs] = useState([])

    useEffect(async() => {
        const response = await axios({url: "graphql", method: "post", data:{
            query: `
            query getBlogs {
                blogs {
                  title
                  description
                  text
                  tags
                  id
                }
              }
            `
        }})
        setBlogs(response.data.data.blogs)
    }, [])


    const blogsElems = (blogs) => {
        return blogs.map((blog, index) => {
            return <Row key={index}><Blog index={index} title={blog.title} description={blog.description} id={blog.id} tags={blog.tags} text={blog.text}/></Row>
        })
    }

    return (
        <div className="Blogs">
            <Container>
                {blogs.length > 0 ? blogsElems(blogs) : <h3>Loading blogs...</h3>}
            </Container>
        </div>
    );
}

export default Blogs;
