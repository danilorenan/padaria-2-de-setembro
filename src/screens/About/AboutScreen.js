import React from 'react';
import AboutHome from '../../components/AboutHome/AboutHome';
import Contact from '../../components/Contact/Contact';
import { AboutScreenContainer } from './styles';

const AboutScreen = () => {
    return (
        <AboutScreenContainer>
            <div className='about'>
                <AboutHome />
            </div>
            <div className='division'>

            </div>
                <Contact />
        </AboutScreenContainer>
    )
}

export default AboutScreen;
