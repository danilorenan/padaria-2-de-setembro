import styled from "styled-components";
import TextField from '@material-ui/core/TextField'

export const ContainerContact = styled.div`
    background-color: #272622;
    height: 90vh;
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 502px){
        height: 100vh;
        padding: 1rem;
    }
`
export const TitleContact = styled.h1`
    color: #fff;
    font-size: 2rem;

    @media(max-width: 780px){
        font-size: 1.5rem;
    }
    @media(max-width: 433px){
        display: none;
        
    }

    @media(max-width: 408px){
        font-size: 1rem;
    }
`
export const ContainerFormContact = styled.div`
    width: 60%;
    min-width: 770px;
    inline-size: auto;
    height: 90%;
    margin: 2rem;
    border: 1px solid #564929;
    display: flex;

    @media(max-width: 780px){
        width: 80%;
        min-width: 600px;
    }
    @media(max-width: 600px){
        width: 80%;
        min-width: 500px;
    }
    @media(max-width: 502px){
        width: 80%;
        min-width: 400px;
        display: flex;
        flex-direction: column;
        margin: 1rem;
        height: 90%;
    }
    @media(max-width: 433px){
        width: 10rem;
        height: 95%;
        margin: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media(max-width: 408px){
        width: 40%;
        max-width: 100%;
        margin: 0.2rem;
        border: none;
    }
`
export const ContainerPhoneContact = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    justify-content: center;
    border-right: 1px solid #564929;
    margin: 2rem 0 2rem 0;

    @media(max-width: 502px){
        padding: 1rem;
        width: 100%;
        height: 25%;
        align-items: center;
        justify-content: center;
        border-right: none;
        margin: 1rem 0 1rem 0;
    }
`
export const TextPhone = styled.h2`
    color: #fff;
    font-size: 1.5rem;

    @media(max-width: 502px){
        font-size: 1rem;
    }
`
export const TextEmail = styled.h3`
    color: #fff;
    margin: 2rem 0 2rem 0;
    @media(max-width: 502px){
        margin: 1rem 0 1rem 0;
        font-size: 0.8rem;
    }
`
export const ContainerInformations = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    line-height: 1.5rem;
    span {
        font-size: 1rem;
    }
    @media(max-width: 502px){
        span{
            text-align: center;
            font-size: 0.8rem;
            line-height: 1.2rem;
        }
    }
`
export const ContainerEmailContact = styled.form`
    background-color: #564929;
    width: 50%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem 0 2rem;

    @media(max-width: 502px){
        padding: 0 1rem 0 1rem;
        width: 90%;
        height: 65%;
        
    }
    @media(max-width: 433px){
        width: 95%;
        height: 70%;
        padding: 0 0.5rem 0 0.5rem;
    }
    @media(max-width: 408px){
        width: 85%;
    }
`
export const NameTextField = styled(TextField)`
    color: #fff;
`
export const EmailTextField = styled(TextField)`

`
export const MessageTextField = styled(TextField)`
    
`
export const SendMessage = styled.div`
    color: #fff;
    margin: 0.2rem;
    background-color: #272622;
    padding: 0.2rem;
    width: 4rem;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    height: 2rem;
    border-radius: 2px;
    &:hover {
        cursor: pointer;
        background-color: #564929;
        border: 1px solid #272622;
        color: #272622;
    }

    @media(max-width: 433px){
        height: 1.5rem;
        margin: 0.1rem;
        font-size: 0.7rem;
    }
`
