import React from 'react';

// Bootstrap
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default ({reference}) => (
    <section className="about" id="about" ref={reference}>
        <Container>
            <h1 className="section-title">¿Quiénes somos?</h1>
            <p>
                Somos un grupo de abogados unidos por la convicción de defender a los afiliados de las distintas Isapres frente a las continuas y abusivas alzas unilaterales en los precio de sus planes de salud.
                <br />
                Nos dedicamos a la tramitación de recursos de protección en contra de las Isapres, sin ningún costo para ti. 
                <br />
                Tramitamos en todo Chile.
            </p>
        </Container>
    </section>
)