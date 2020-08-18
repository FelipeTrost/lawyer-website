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
                        {
                            question: "¿Qué es una carta de adecuación?", 
                            answer: "La carta de adecuación es una carta certificada enviada al domicilio registrado por el afiliado en la Isapre, que se envía con, a lo menos 90 días de antelación al vencimiento de la anualidad del contrato.\n En esta carta, la Isapre comunica al afiliado las nuevas condiciones en su contrato de salud, que se traducen en el aumento del precio base del plan, aun cuando la cobertura de las prestaciones médicas se mantiene."
                        },
                        {
                            question: "¿Qué alternativas tengo?", 
                            answer: "La carta de adecuación ofrece tres alternativas, que deben ejercerse antes de que se cumpla la anualidad del contrato: \n\n1.	Aceptar el aumento en el precio base del plan de salud contratado.\n2.	Contratar el plan alternativo que ofrece la Isapre, el cual, en la mayoría de los casos, responde a un precio similar al plan contratado previo al alza, pero tiene una menor cobertura.\n3.	Desafiliarse de la Isapre.\nAdicional a las opciones ofrecidas por la Isapre, existe una cuarta posibilidad: deducir un recurso de protección en contra de la Isapre, por el alza injustificada en el precio del plan de salud."
                        },
                        {
                            question: "¿Cuál es el plazo para reclamar?", 
                            answer: "El plazo es de 90 días desde la emisión de la carta de adecuación (según la fecha del documento) y hasta 30 días de materializada el alza, según fecha del Formulario Único de Notificación (FUN)."
                        },
                        {
                            question: "¿Cuál es el costo de la tramitación?", 
                            answer: "Este tramite NO TIENE COSTO, dado que los honorarios de los abogados los fija la Corte, a través de las costas, que son pagadas directamente por la Isapre. "
                        },
                        {
                            question: "¿Cuánto dura la tramitación del recurso?", 
                            answer: "Dependiendo de la ciudad en la que resida el afiliado, los tiempos pueden variar entre 2 o 3 meses, hasta un año. \n Lo importante es que la primera resolución de la Corte es una “orden de no innovar” lo que significa que la Isapre debe suspender el alza del precio del plan, hasta que se dicte la sentencia del recurso."
                        },
                        {
                            question: "El alza no es significativa, ¿debería reclamar?", 
                            answer: "Muchos afiliados creen que el alza de precio es insignificante, por lo que no le prestan atención a estas alzas. Sin embargo, existen buenas razones para tramitar un recurso de protección:\n1.	El precio base del plan es un factor multiplicador que se aplica para cada uno de los beneficiarios del plan, o sea, si la familia crece, esto se reflejará en el valor final del plan.\n2.	El precio base del plan es un factor multiplicador que se aplica para cada uno de los beneficiarios del plan, o sea, si la familia crece, esto se reflejará en el valor final del plan.\n3.	El precio base del plan es un factor multiplicador que se aplica para cada uno de los beneficiarios del plan, o sea, si la familia crece, esto se reflejará en el valor final del plan.\n4.	El precio base del plan es un factor multiplicador que se aplica para cada uno de los beneficiarios del plan, o sea, si la familia crece, esto se reflejará en el valor final del plan.\n* Según fuentes de la Superintendencia de Salud, el precio de un plan de Isapre ha aumentado en promedio:\n27,9% en planes BANMÉDICA.\n56,8% en planes CONSALUD.\n72,5% en planes COLMENA.\n85,6% en planes CRUZ BLANCA."
                        },
                    ].map((question, idx) => (
                        <Card className="Card" bg="dark" text="light" key={idx}>
                            <Card.Body>
                                <Card.Title>{question.question}</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                <Card.Text> {question.answer.split('\n').map(p => <p>{p}</p>)} </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                {/* </Row> */}
            </div>
        </Container>
    </section>
)