import React from 'react'
import Maps from './Maps';
import Contact from '../../components/Contact/Contact';
import { ContactScreenContainer } from './styles';
import { Helmet } from 'react-helmet';
import localizationImage from '../../assets/localization.jpg';

const ContactScreen = () => {
    return (
        <ContactScreenContainer>
            <Helmet>
                <title>Padaria 2 de Setembro</title>
                <meta name="description" content="Padaria 2 de Setembro contato" />
            </Helmet>
            <Contact />
            <div className='space'>
                <div className='localization-container'>
                    <img src={localizationImage} />
                </div>
            </div>
            <Maps></Maps>
        </ContactScreenContainer>
    )
}

export default ContactScreen;
