import styled from "styled-components";

export const ContactScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 502px){
            margin-top: 4rem;
        }

    .space {
        height: 10rem;
        background-color: #564929;

        @media(max-width: 468px){
            height: 5rem;
        }
    }
`

export const MapsContainer = styled.div`
    width: 100%;
    height: 30rem;
    background-color: #272622;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .map-style {
        width: 50rem;
        height: 20rem;

        @media(max-width: 806px){
        width: 45rem;
        }
        @media(max-width: 728px){
            width: 40rem;
        }
        @media(max-width: 644px){
            width: 35rem;
        }
        @media(max-width: 564px){
            width: 30rem;
        }
        @media(max-width: 477px){
            width: 25rem;
        }
        @media(max-width: 406px){
            width: 20rem;
        }
        @media(max-width: 324px){
            width: 18rem;
        }
    }
`
export const MapTitle = styled.h1`
    color: #fff;
    font-size: 2rem;

    @media(max-width: 780px){
        font-size: 1.5rem;
    }
`