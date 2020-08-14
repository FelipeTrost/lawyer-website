import React from 'react';

// Bootstrap
import {Container, Card, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default ({reference}) => (
    <section className="questions" id="questions" ref={reference}>
        <Container>
            <h1 className="section-title">Preguntas frecuentes</h1>

            <div className="cards">
                {/* <Row sm={4}> */}
                    {[
                        {question: "Hola que pongo?", answer: "No se que poner jajajaj, holaaaaaaaaaa"},
                        {question: "Hola que pongo?", answer: "No se que poner jajajaj, holaaaaaaaaaa"},
                        {question: "Hola que pongo?", answer: "No se que poner jajajaj, holaaaaaaaaaa"},
                        {question: "Hola que pongo?", answer: "No se que poner jajajaj, holaaaaaaaaaa"},
                        {question: "Hola que pongo?", answer: "No se que poner jajajaj, holaaaaaaaaaa"},
                    ].map((question, idx) => (
                        <Card className="Card" bg="dark" text="light" key={idx}>
                            <Card.Body>
                                <Card.Title>{question.question}</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                <Card.Text>{question.answer}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                {/* </Row> */}
            </div>
        </Container>
    </section>
)