// React
import React, {useRef, useEffect, useState}  from 'react';

// Bootstrap
import { Navbar,Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap'

// React router
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Frontend
import './app.css';
import Components from './components';

// Media
import logo from './logo.png';

const App = () => {
    const [loaded, setLoaded]= useState(false);
    const [success, setSuccess]= useState(null);

    const aboutRef = useRef(null);
    const questionsRef = useRef(null);
    const contactRef = useRef(null);


    useEffect(() => {
        setLoaded(true);
    
        const query = window.location.search;
        const params = new URLSearchParams(query);
        const success = params.get("success");

        if(success !== null){
            setSuccess(success);
        }
    }, [])

    return (
        <div className="App" >
            <Router>
     
                <header>
                    <Navbar collapseOnSelect  expand="md" bg="light" variant="light" fixed="top">
                        <LinkContainer to="/">
                            <>     
                                <Navbar.Brand><img src={logo} alt="paremoselalzaisapre.cl logo" height="50px" width="50x" /></Navbar.Brand>
                                <Navbar.Brand>Paremos el alza</Navbar.Brand>
                            </>
                        </LinkContainer>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <LinkContainer to="/quienessomos">     
                                    <Nav.Link>Quiénes somos</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/preguntas">     
                                    <Nav.Link>Preguntas frecuentes</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/contacto">     
                                    <Nav.Link>Contacto</Nav.Link>
                                </LinkContainer>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Container className="text-center">
                        <h1>PAREMOS EL ALZA DE TU ISAPRE</h1>
                        <h2>Tramitamos sin costo recursos de protección por alza en el precio base de tu plan.</h2>
                    </Container>
                </header>

                <Components contactSuccess={success} contactClose={() => setSuccess(null)}  aboutRef={aboutRef} questionsRef={questionsRef} contactRef={contactRef} />       

                {loaded && ( <Switch>
                    <Route exact path="/quienessomos" render={() => aboutRef.current && aboutRef.current.scrollIntoView({behavior: 'smooth', block: "start",}) } />
                    <Route exact path="/preguntas"  render={() => questionsRef.current && questionsRef.current.scrollIntoView({behavior: 'smooth', block: "start",}) } />
                    <Route exact path="/contacto"   render={() => contactRef.current && contactRef.current.scrollIntoView({behavior: 'smooth', block: "start",}) } />
                    <Route exact path="/" render={() => window.scrollTo({top: 0, behavior: 'smooth'}) } />
                </Switch>)}
            </Router>
        </div>
    );
}

export default App;