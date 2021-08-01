import styled from "styled-components";

export const ContainerAboutHome = styled.div`
    background-color: #272622;
    height: 60vh;
    display: flex;
    justify-content: center;
    width: min(100%, 175rem);
    margin-inline: auto;
    overflow: auto;
`
export const ContainerInfosAbout = styled.div`
    color: #fff;
    display: flex;
    padding: 2rem 0 2rem 0;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;   
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

    @media(max-width: 580px) {
        font-size: 1rem;
    }

    @media(max-width: 360px) {
        font-size: 0.8rem;
    }
`
export const MoreAbout = styled.div`
    text-decoration: underline;
    cursor: pointer;
    &:hover {
        color: #272622;
        background-color: #fff;
    }
`