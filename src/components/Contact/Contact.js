import React from 'react'
import { ContainerContact, 
        ContainerEmailContact, 
        ContainerFormContact, 
        ContainerInformations, 
        ContainerPhoneContact, 
        EmailTextField, 
        MessageTextField, 
        NameTextField, 
        SendMessage, 
        TextEmail, 
        TextPhone, 
        TitleContact } from './styles';

const Contact = () => {

    return (
        <ContainerContact>
            <TitleContact>Deixem-nos saber as suas sugestões</TitleContact>
            <ContainerFormContact>
                <ContainerPhoneContact>
                    <TextPhone>(47) 3323-3106</TextPhone>
                    <TextEmail>sac@padaria2desetembro</TextEmail>
                    <ContainerInformations>
                        <span>Padaria 2 de Setembro Ltda</span>
                        <span>Rua Santa Quitéria, 112 - Itoupava Norte</span>
                        <span>CEP 89052-030 | Blumenau - SC</span>
                    </ContainerInformations> 
                </ContainerPhoneContact>
                <ContainerEmailContact>
                    <NameTextField 
                        required id="standard-basic" 
                        label="Digite seu Nome"
                        margin='dense'
                        fullWidth
                        variant='filled'
                        >
                    </NameTextField>
                    <EmailTextField 
                        required id="standard-basic" 
                        label="Digite seu Email"
                        margin='none'
                        fullWidth
                        variant='filled'>
                    </EmailTextField>
                    <MessageTextField 
                        id="outlined-multiline-static" 
                        multiline rows={4} 
                        label='Mensagem'
                        margin='normal'
                        fullWidth
                        variant='filled'>
                    </MessageTextField>
                    <SendMessage>Enviar</SendMessage>
                </ContainerEmailContact>
            </ContainerFormContact>
        </ContainerContact>
    )
}

export default Contact;
