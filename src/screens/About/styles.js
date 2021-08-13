import styled from "styled-components";

export const AboutScreenContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;

    .about {
        @media(max-width: 570px){
            margin-top: 3rem;
        }
    }

    .division {
        height: 20vh;
        background-color: #564929;
    }

    .contact {
        height: 100vh;
        margin: 0;
    }
`
export const ContainerAboutHome = styled.div`
    background-color: #272622;
    height: 35rem;
    display: flex;
    justify-content: center;

    @media(max-width: 580px) {
        height: 40rem;
    }
    @media(max-width: 454px) {
        height: 46rem;
    }
    @media(max-width: 388px) {
        height: 50rem;
    }
    @media(max-width: 343px) {
        height: 54rem;
    }
    @media(max-width: 321px) {
        height: 59rem;
    }
    @media(max-width: 297px) {
        height: 64rem;
    }
`
export const ContainerInfosAbout = styled.div`
    color: #fff;
    display: flex;
    padding: 2rem 0 2rem 0;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .style-about {
        display: flex;
        align-items: center;
        flex-direction: row;
        margin: 1rem 0 1rem 0;
        @media(max-width: 580px) {
            flex-direction: column;
    }
    
    }   
`
export const TitleAbout = styled.h1`
    font-size: 2.7rem;
    cursor: pointer;

    @media(max-width: 580px) {
        font-size: 2rem;
    }
    
    @media(max-width: 360px) {
        font-size: 1.8rem;
    }
`
export const TextAbout = styled.span`
    text-align: center;
    font-size: 1.2rem;
    cursor: pointer;
    margin: 0 2rem 0 2rem;
    margin-inline: 1rem;
    width: 50%;

    @media(max-width: 1248px) {
        font-size: 1rem;
        width: auto;
    }

    @media(max-width: 904px) {
        font-size: 0.8rem;
    }
`