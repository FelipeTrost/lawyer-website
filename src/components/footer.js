import React from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Bootstrap
// import {Container, Card, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default ({reference}) => (
    <footer ref={reference}>
        <div className="items">
            <div>
                <h3 className="text-uppercase section-title">Redes sociales</h3>
                <a href="https://www.instagram.com/paremoselalza/" target="blank"><FontAwesomeIcon icon={faInstagram} className="icon" /> Instagram</a>
                <a href="www.linkedin.com/in/paremos-el-alza-isapre-6735411aa" target="blank"><FontAwesomeIcon icon={faLinkedin} className="icon" /> Linkedin</a>
                
            </div>

            <div>
                <h3 className="text-uppercase section-title">Contácto</h3>
                <a>Número telefónico</a>
                <a>Correo</a>
            </div>

            <h1 className="section-title">Nombre exitoso</h1>
        </div>
    
        <div className="footer-copyright text-center py-3">© 2020 Derechos de autor: <a> Paremos el alza</a>
    </div>
  </footer>
)