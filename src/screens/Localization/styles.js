import styled from "styled-components";

export const LocalizationContainer = styled.div`

`
export const MapContainer = styled.div`
    background-color: #272622;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .map-background {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #564929;
        flex-direction: column;

        .cities-text {
            padding: 1rem;
        }
    }
`
export const TitleMap = styled.h1`
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
    margin: 1rem;
    
    @media(max-width: 640px){
        font-size: 2rem;
    }
    @media(max-width: 570px){
        font-size: 1.5rem;
        margin-top: 5rem;
    }
`
export const Map = styled.img`
    width: 40rem;
    margin: 2rem;
    border: 1px solid #272727;
    padding: 1rem;

    @media(max-width: 640px){
        width: 30rem;
    }
    @media(max-width: 476px){
        width: 20rem;
    }
`
export const CitiesText = styled.span`
    color: #fff;
`
