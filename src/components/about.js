import React from 'react';

// Bootstrap
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default ({reference}) => (
    <section className="about" id="about" ref={reference}>
        <Container>
            <h1 className="section-title">Te ahorraremos dinero haciendo magia negra</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Container>
    </section>
)