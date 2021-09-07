import React, {useState} from 'react'
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
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';


const Contact = () => {

    const [emailInput, setEmailInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [messageInput, setMessageInput] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('service_pny4orl', 'template_pza0poj', {
            name: nameInput,
            email: emailInput,
            message: messageInput
        }, 'user_cf8SiJrCNBLehEwH5sihB')
      .then((result) => {
          alert('Mensagem enviada com sucesso')
          setMessageInput('')
          setNameInput('')
          setEmailInput('')
      }, (error) => {
          alert(error.message);
      });
    }

    const useStyle = makeStyles(theme => ({
        root: {
            '& .MuiFormLabel-root': {
                color: '#fff'
            },
            '& .MuiInputBase-input': {
                color: '#fff'
            }
        }
        
    }))
    const classes = useStyle();


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
                <ContainerEmailContact className={classes.root} onSubmit={sendEmail}>
                    <NameTextField
                        name="name" 
                        required id="standard-basic" 
                        label="Digite seu Nome"
                        margin='dense'
                        fullWidth
                        variant='filled'
                        value={nameInput}
                        onChange={e => setNameInput(e.target.value)}
                        >
                    </NameTextField>
                    <EmailTextField
                        name="email" 
                        required id="standard-basic" 
                        label="Digite seu Email"
                        margin='none'
                        fullWidth
                        variant='filled'
                        value={emailInput}
                        onChange={e => setEmailInput(e.target.value)}>
                    </EmailTextField>
                    <MessageTextField
                        name="message" 
                        id="outlined-multiline-static" 
                        multiline rows={4} 
                        label='Mensagem'
                        margin='normal'
                        fullWidth
                        variant='filled'
                        value={messageInput}
                        onChange={e => setMessageInput(e.target.value)}>
                    </MessageTextField>
                    <SendMessage value='Enviar' type='submit' />
                </ContainerEmailContact>
            </ContainerFormContact>
        </ContainerContact>
    )
}

export default Contact;
