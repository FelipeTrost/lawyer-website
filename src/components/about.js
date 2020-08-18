import React from 'react';

// Bootstrap
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default ({reference}) => (
    <section className="about" id="about" ref={reference}>
        <Container>
            <h1 className="section-title">¿Que hacemos?</h1>
            <h3 className="section-title">Tramitamos recursos de protección en contra de las Isapres, sin costo alguno para ti.</h3>
        </Container>
    </section>
)