import './App.css';

import { BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';
import About from "../src/pages/About.js"
import Projects from "../src/pages/Projects.js"
import Blog from "../src/pages/Blog.js"

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
                    <Route path="/blog">
                        <Blog/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
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
