import React from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Bootstrap
// import {Container, Card, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../logo.png';

export default ({reference}) => (
    <footer ref={reference}>
        <div className="items">
            <div>
                <h3 className="text-uppercase section-title">Redes sociales</h3>
                <a href="https://www.instagram.com/paremoselalza/" target="blank"><FontAwesomeIcon icon={faInstagram} className="icon" /> Instagram</a>
                <a href="www.linkedin.com/in/paremos-el-alza-isapre-6735411aa" target="blank"><FontAwesomeIcon icon={faLinkedin} className="icon" /> Linkedin</a>
                
            </div>

            <div>
                <h3 className="text-uppercase section-title">Contacto</h3>
                <a href="mailto:paremoselalzaisapre@gmail.com">paremoselalzaisapre@gmail.com</a>
            </div>

            <h1 className="section-title"><img src={logo} alt="paremoselalzaisapre.cl" height="70px" width="70x" /> Paremos el alza</h1>
        </div>
    
        <div className="footer-copyright text-center py-3">© 2020 Derechos de autor: <b>paremoselalzaisapre.cl</b>
        </div>
    </footer>
)