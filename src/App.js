// React
import React, {useRef}  from 'react';

// Bootstrap
import { Navbar,Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap'

// React router
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Frontend
import './app.css';
import MainFrontend from './components';

const App = () => {
  const navRef = useRef(null);

  const aboutRef = useRef(null);
  const questionsRef = useRef(null);
  const contactRef = useRef(null);

  window.addEventListener('scroll', e => {
    if(!navRef.current) return;
    if(window.scrollY > 30){
      navRef.current.classList.add("scrolled");
    }else{
      navRef.current.classList.remove("scrolled");
    }
  })

  return (
    <div className="App" >
      <Router>
      <header>
        <Navbar collapseOnSelect  bg="transparent" variant="dark" fixed="top" ref={navRef}>
          <LinkContainer to="/">     
            <Navbar.Brand href="#home">Avogado</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/quehacemos">     
                <Nav.Link>Que hacemos</Nav.Link>
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
            <h1>Detengamos el alza</h1>
            <h2>Asi es</h2>
        </Container>
    </header>
        
        <MainFrontend aboutRef={aboutRef} questionsRef={questionsRef} contactRef={contactRef} />     

        <Switch>
          <Route exact path="/" render={() => window.scrollTo({top: 0, behavior: 'smooth'}) } />
          <Route exact path="/quehacemos" render={() => aboutRef.current && aboutRef.current.scrollIntoView({behavior: 'smooth', block: "start",}) } />
          <Route exact path="/preguntas"  render={() => questionsRef.current && questionsRef.current.scrollIntoView({behavior: 'smooth', block: "start",}) } />
          <Route exact path="/contacto"   render={() => contactRef.current && contactRef.current.scrollIntoView({behavior: 'smooth', block: "start",}) } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
