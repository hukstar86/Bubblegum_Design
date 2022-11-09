import React from 'react'
import { ImQuotesLeft } from 'react-icons/im';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import './Firststep.scss';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};




const FirstStep = () => {
    return (


        <div className="app__container">

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView} className="about__content-1">
                <h1>What we do</h1>
                <hr />
                <p>Here at bubble gum we pride ourselves in delivering a digital solution that is not only visually applealing but helps you reach your business goals. Driving traffic to your business thru carefully thought out UX and functionaly is a what we do best. Our team has over 20 years experience in business in a range of indrustys which helps us relate and understand a much larger market. We will guide you through the whole process of getting your business online for the world to see.
                    </p>
            </motion.div>
            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView} className="about__content-2">
                <h1>First Step</h1>
                <hr />
                <p>Let us buy you a coffee and chat about how we can work together to reach your business goals, (or zoom if you are outside of Christchurch) we will get to know you, your business and your digital needs. Together we will idenitfy the end goal for your website design, we will etablish the scope of the project, your target auidence, identify competiors, branding, we wil gather as much information from you as we can so we can then go away and create a free no obligation website proposal which will showcase bubblegums web soultion and process.</p>


            </motion.div>
            <motion.div
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="about__content-3">

                <ImQuotesLeft /><h3>We design and develop professional custom websites that stand out, using the lastest and most popular tech stack.</h3>
            </motion.div>

        </div>





    )
}

export default AppWrap(FirstStep, '');
