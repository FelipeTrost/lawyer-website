import React from 'react';

import Header from './header';
import About from './about';
import Questions from './questions';
import Contact from './contact';

export default ({aboutRef, questionsRef, contactRef}) => (
    <>
        <Header />
        <About reference={aboutRef} />
        <Questions reference={questionsRef} />
        <Contact reference={contactRef} />
    </>
)