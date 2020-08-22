import React from 'react';

// Fontawesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons'

// Bootstrap
import {Container, Form, Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

// Send email
const send = e => {
    e.preventDefault();

    // const formData = new FormData(e.target);
    // const list = Array.from(formData.entries());

    alert("Todavía no disponible");
}

export default ({reference}) => (
    <section className="contact" id="contact" ref={reference}>
        <Container>
            <h1 className="section-title">Contacto</h1>

            <Card className="form">
                <Form onSubmit={send}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control type="text" name="name" required/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Cédula de identidad</Form.Label>
                    <Form.Control type="text" name="identification" required/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Domicilio y Comuna</Form.Label>
                    <Form.Control type="text" name="location" required/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Isapre</Form.Label>
                    <Form.Control type="text" name="isapre" required/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="text" name="phone" required/>
                </Form.Group>
                
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" name="email" required/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensaje (opcional)</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Button variant="primary" type="submit">Enviar</Button>
            </Form>
            </Card>
        </Container>
    </section>
)