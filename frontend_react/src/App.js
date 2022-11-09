import React from 'react';

import { About, FirstStep, Footer, Header, Skills, Testimonials, Works, } from './container/index';

import { Navbar, Scroll, } from './components';

import './app.scss';

const App = () => {
    return (

        <div className="app">


            <Navbar />
            <Header />
            <FirstStep />
            <Scroll />
            <About />
            <Works />
            <Skills />
            <Testimonials />
            <Footer />


        </div>

    )
}

export default App;
