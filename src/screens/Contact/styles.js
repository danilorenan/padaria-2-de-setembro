import styled from "styled-components";

export const ContactScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 502px){
            margin-top: 4rem;
        }

    .space {
        height: 40rem;
        background-color: #564929;
        display: flex;
        justify-content: center;
        align-items: center;

        .localization-container {
            margin: 2rem;
        }

        img {
            object-fit: cover;
            background-size: 50% 50%;
            background: center;
            width: 100%;
            height: 35rem;
        }

        @media(max-width: 468px){
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