import React from 'react'

import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Header.scss';


const Header = () => {
    return (
        <div className="app__header " >

            <motion.div

                initial={{ x: '-100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 1.5 }}
                className="app__header-content">
                <h3 className="welcome-text">Welcome to</h3>

                <img src={images.bubblegumLogo} alt="header logo" />
                <p>We are a boutique digital agency based in Christchurch and Wellington specialized in web design and development, UX digital strategy, ecommerce, and SEO. At <span className="pink-text">bubble gum </span>we deliver exceptional digital experiences and build show stopping brands</p>

                <div className="app__header-button">
                    <button className="btnn" type="button">Get In Touch</button>
                </div>

                <div className="app__header-mission-statement">
                    <h2>design.</h2>
                    <h2>develop.</h2>
                    <h2>deploy.</h2>
                </div>
            </motion.div>
            <motion.div

                animate={{ scale: [0, 1] }}
                transition={{ delay: 0.8, duration: 1 }}
                className="header__image">

                <img src={images.monkey} alt="monkey" />


            </motion.div>


        </div>

    )
}



export default AppWrap(Header, 'home');
