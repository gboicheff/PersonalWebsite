import './App.css';

import { BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';
import About from "../src/pages/About.js"
import Projects from "../src/pages/Projects.js"
import Blogs from "../src/pages/Blogs.js"
import Login from "../src/pages/Login.js"
import BlogPost from "../src/pages/BlogPost"


import MyNav from "../src/components/Nav.js"
import {useEffect, useState} from "react";
import { Container , Navbar, Nav, NavItem, NavLink, Row} from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Container>
                    <MyNav></MyNav>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/blog/:id">
                        <BlogPost/>
                    </Route>
                    <Route exact path="/blog">
                        <Blogs/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/about"/>
                    </Route>
                </Container>
            </BrowserRouter>
        </div>
    );
}

export default App;
