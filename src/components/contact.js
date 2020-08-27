import React from 'react';

// Bootstrap
import {Container, Form, Card, Button, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default ({reference, success, close}) => (
    <section className="contact" id="contact" ref={reference}>
        <Container>
            <h1 className="section-title">Contacto</h1>

            <Alert show={success !== null} variant={success === "true" ? "success" : success === "false" && "danger"} dismissible onClose={close}>
                <p>
                    {success === "true" ? "Mensaje enviado exitosamente" : "Ha ocurrido un error, por favor intente de nuevo más tarde"}
                </p>
            </Alert>

            <Card className="form">
                <Form action="https://paremoselalzaisapre.cl/mail/send.php" method="POST" encType="multipart/form-data">
                <Form.Group>
                    <Form.Label forname="name">Nombre Completo</Form.Label>
                    <Form.Control type="text" name="name" id="name" required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label forname="identification">Cédula de identidad</Form.Label>
                    <Form.Control type="text" name="identification" id="identification" required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label forname="location">Domicilio y Comuna</Form.Label>
                    <Form.Control type="text" name="location" id="location" required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label forname="isapre">Isapre</Form.Label>
                    <Form.Control type="text" name="isapre" id="isapre" required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label  forname="phone">Teléfono</Form.Label>
                    <Form.Control type="text" name="phone" required/>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label forname="email">Correo</Form.Label>
                    <Form.Control type="email" name="email" id="email" required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label forname="letter">Carta de adecuación o FUN (escaneado lo más claro posible)</Form.Label>
                    <Form.File type="file" name="letter" id="letter" required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label forname="message">Mensaje (opcional)</Form.Label>
                    <Form.Control as="textarea" name="message" id="message" rows="3" />
                </Form.Group>

                <Button variant="primary" type="submit">Enviar</Button>
            </Form>
            </Card>
        </Container>
    </section>
)