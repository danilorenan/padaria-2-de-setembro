import styled from "styled-components";

export const ContainerProducts = styled.div`
    width: 100%;
    background-color: #272622;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`
export const PaesTitle = styled.h1`
    color: #fff;
    font-size: 2.5rem;
    margin: 2rem;
`
export const PaesContainer = styled.div`
    padding-bottom: 3rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const PaesItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50rem;
    height: 25rem;
    box-shadow: 0px 7px 10px rgba(1,1,1, 1);
    margin: 1rem;
    
    @media (max-width: 822px){
        width: 40rem;
        height: 20rem;
    }
    @media (max-width: 664px){
        width: 30rem;
        height: 18rem;
    }
    @media (max-width: 498px){
        width: 20rem;
        height: 30rem;
    }
    @media (max-width: 342px){
        width: 16rem;
        height: 30rem;
    }
`
export const PaesCard = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    overflow: hidden;
    @media (max-width: 498px){
        flex-direction: column;
    }
`
export const PaesImageCard = styled.img`
    width: 25rem;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    @media (max-width: 822px){
        width: 20rem;
    }
    @media (max-width: 664px){
        width: 15rem;
    }
    @media (max-width: 498px){
        height: 15rem;
        width: 20rem;
    }
    @media (max-width: 342px){
        width: 16rem;
        height: 15rem;
    }
`
export const PaesInfosContainer = styled.div`
    width: 25rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    margin: 2rem;
    border: 6px double #564929;

    @media (max-width: 498px){
        width: 16rem;
        height: 20rem;
    }
    @media (max-width: 342px){
        width: 12rem;
        height: 15rem;
    }

`
export const PaesNameCard = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    @media (max-width: 664px){
        font-size: 1rem;
    }
`
export const PaesAboutCard = styled.span`
    color: #fff;
    text-align: center;
    padding: 0 1rem 0 1rem;
    @media (max-width: 664px){
        font-size: 0.8rem;
    }
    
`
export const PaesCodCard = styled.h3`
    color: #fff;
    font-size: 0.8rem;
    @media (max-width: 664px){
        font-size: 0.5rem;
    }
`
export const PaesMoreButton = styled.div`
    cursor: pointer;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    width: 6rem;
    font-size: 1rem;
    padding: 1px;
    background-color: rgb(86, 73, 41);
    &:hover{
        background-color: #fff;
        color: rgb(86, 73, 41);
    }
`
export const BolosTitle = styled.h1`
    color: #fff;
    font-size: 2.5rem;
    margin: 2rem;
`
export const BolosContainer = styled.div`
    padding-bottom: 3rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const BolosItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50rem;
    height: 25rem;
    box-shadow: 0px 7px 10px rgba(1,1,1, 1);
    margin: 1rem;
    
    @media (max-width: 822px){
        width: 40rem;
        height: 20rem;
    }
    @media (max-width: 664px){
        width: 30rem;
        height: 18rem;
    }
    @media (max-width: 498px){
        width: 20rem;
        height: 30rem;
    }
    @media (max-width: 342px){
        width: 16rem;
        height: 30rem;
    }
`
export const BolosCard = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    overflow: hidden;
    @media (max-width: 498px){
        flex-direction: column;
    }
`
export const BolosImageCard = styled.img`
    width: 25rem;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    @media (max-width: 822px){
        width: 20rem;
    }
    @media (max-width: 664px){
        width: 15rem;
    }
    @media (max-width: 498px){
        height: 15rem;
        width: 20rem;
    }
    @media (max-width: 342px){
        width: 16rem;
        height: 15rem;
    }
`
export const BolosInfosContainer = styled.div`
    width: 25rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    margin: 2rem;
    border: 6px double #564929;

    @media (max-width: 498px){
        width: 16rem;
        height: 20rem;
    }
    @media (max-width: 342px){
        width: 12rem;
        height: 15rem;
    }

`
export const BolosNameCard = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    @media (max-width: 664px){
        font-size: 1rem;
    }
`
export const BolosAboutCard = styled.span`
    color: #fff;
    text-align: center;
    padding: 0 1rem 0 1rem;
    @media (max-width: 664px){
        font-size: 0.8rem;
    }
    
`
export const BolosCodCard = styled.h3`
    color: #fff;
    font-size: 0.8rem;
    @media (max-width: 664px){
        font-size: 0.5rem;
    }
`
export const BolosMoreButton = styled.div`
    cursor: pointer;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    width: 6rem;
    font-size: 1rem;
    padding: 1px;
    background-color: rgb(86, 73, 41);
    &:hover{
        background-color: #fff;
        color: rgb(86, 73, 41);
    }
`
export const CucasTitle = styled.h1`
    color: #fff;
    font-size: 2.5rem;
    margin: 2rem;
`
export const CucasContainer = styled.div`
    padding-bottom: 3rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #272622;
`
export const CucasItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50rem;
    height: 25rem;
    box-shadow: 0px 7px 10px rgba(1,1,1, 1);
    margin: 1rem;
    
    @media (max-width: 822px){
        width: 40rem;
        height: 20rem;
    }
    @media (max-width: 664px){
        width: 30rem;
        height: 18rem;
    }
    @media (max-width: 498px){
        width: 20rem;
        height: 30rem;
    }
    @media (max-width: 342px){
        width: 16rem;
        height: 30rem;
    }
`
export const CucasCard = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    overflow: hidden;
    background-color: #272622;

    @media (max-width: 498px){
        flex-direction: column;
    }
`
export const CucasImageCard = styled.img`
    width: 25rem;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    @media (max-width: 822px){
        width: 20rem;
    }
    @media (max-width: 664px){
        width: 15rem;
    }
    @media (max-width: 498px){
        height: 15rem;
        width: 20rem;
    }
    @media (max-width: 342px){
        width: 16rem;
        height: 15rem;
    }
`
export const CucasInfosContainer = styled.div`
    width: 25rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    margin: 2rem;
    border: 6px double #564929;

    @media (max-width: 498px){
        width: 16rem;
        height: 20rem;
    }
    @media (max-width: 342px){
        width: 12rem;
        height: 15rem;
    }

`
export const CucasNameCard = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    @media (max-width: 664px){
        font-size: 1rem;
    }
`
export const CucasAboutCard = styled.span`
    color: #fff;
    text-align: center;
    padding: 0 1rem 0 1rem;
    @media (max-width: 664px){
        font-size: 0.8rem;
    }
    
`
export const CucasCodCard = styled.h3`
    color: #fff;
    font-size: 0.8rem;
    @media (max-width: 664px){
        font-size: 0.5rem;
    }
`
export const CucasMoreButton = styled.div`
    cursor: pointer;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    width: 6rem;
    font-size: 1rem;
    padding: 1px;
    background-color: rgb(86, 73, 41);
    &:hover{
        background-color: #fff;
        color: rgb(86, 73, 41);
    }
`



