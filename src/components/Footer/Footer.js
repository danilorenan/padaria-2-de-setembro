import React from 'react'
import { ContainerFooter, TextContact, TextName } from './styles';

const Footer = () => {
    return (
        <ContainerFooter>
            <a href='https://github.com/danilorenan'><TextName>Feito por Danilo Santos &copy; 2021</TextName></a>
            <a href='https://instagram.com/danilorennan/'><TextContact>Contato</TextContact></a>
        </ContainerFooter>
    )
}

export default Footer;
