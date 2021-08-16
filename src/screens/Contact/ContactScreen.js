import React from 'react'
import Maps from './Maps';
import Contact from '../../components/Contact/Contact';
import { ContactScreenContainer } from './styles';
import { Helmet } from 'react-helmet';

const ContactScreen = () => {
    return (
        <ContactScreenContainer>
            <Helmet>
                <title>Padaria 2 de Setembro</title>
                <meta name="description" content="Padaria 2 de Setembro contato" />
            </Helmet>
            <Contact />
            <div className='space'></div>
            <Maps></Maps>
        </ContactScreenContainer>
    )
}

export default ContactScreen;
