import React from 'react'
import Maps from './Maps';
import Contact from '../../components/Contact/Contact';
import { ContactScreenContainer } from './styles';

const ContactScreen = () => {
    return (
        <ContactScreenContainer>
            <Contact />
            <div className='space'></div>
            <Maps></Maps>
        </ContactScreenContainer>
    )
}

export default ContactScreen;
