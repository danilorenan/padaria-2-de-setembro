import React from 'react';
import About from './About';
import Contact from '../../components/Contact/Contact';
import { AboutScreenContainer } from './styles';

const AboutScreen = () => {
    return (
        <AboutScreenContainer>
            <div className='about'>
                <About />
            </div>
            <div className='division'>

            </div>
                <Contact />
        </AboutScreenContainer>
    )
}

export default AboutScreen;
