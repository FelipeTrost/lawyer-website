import React from 'react';

import About from './about';
import Questions from './questions';
import Contact from './contact';
import Footer from './footer';

export default ({aboutRef, questionsRef, contactRef, contactSuccess, contactClose}) => (
    <>
        <About reference={aboutRef} />
        <Questions reference={questionsRef} />
        <Contact reference={contactRef} success={contactSuccess} close={contactClose}/>
        <Footer />
    </>
)