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
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    grid-column-gap: 2rem;
    margin: 0 4rem 0 5rem;
    border-bottom: 1px solid rgb(86, 73, 41);
    padding-bottom: 3rem;

`
export const PaesItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16rem;
    height: 26rem;
    transition: all 0.2s ease-out;
    border-radius: 5%;
    box-shadow: 0px 7px 10px rgba(1,1,1, 1);
    &:hover {
        transition: all 0.2s ease-out;
        height: 30rem;
        .paes-card{
            &:hover{
                background-image: linear-gradient(to right, rgb(86, 73, 41, 0.2),  rgba(1,0,0,0.0));
            }
        }
        .paes-button{
            display: block;
        }
    }
    
`
export const PaesCard = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

`
export const PaesImageCard = styled.img`
    height: 18rem;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
`
export const PaesInfosContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`
export const PaesNameCard = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 1rem;
`
export const PaesAboutCard = styled.span`
    color: #fff;
    text-align: center;
    font-size: 0.8rem;
`
export const PaesCodCard = styled.h3`
    color: #fff;
    font-size: 0.8rem;
`
export const PaesMoreButton = styled.div`
    cursor: pointer;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    width: 4rem;
    font-size: 1rem;
    padding: 1px;
    background-color: rgb(86, 73, 41);
    display: none;
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
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    grid-column-gap: 2rem;
    margin: 0 4rem 0 5rem;
    border-bottom: 1px solid rgb(86, 73, 41);
`
export const BolosItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16rem;
    height: 19rem;
    transition: all 0.2s ease-out;
    border-radius: 5%;
    box-shadow: 0px 7px 10px rgba(1,1,1, 1);
    &:hover {
        transition: all 0.2s ease-out;
        height: 22rem;
        .Bolos-card{
            &:hover{
                background-image: linear-gradient(to right, rgb(86, 73, 41, 0.2),  rgba(1,0,0,0.0));
            }
        }
        .Bolos-button{
            display: block;
        }
    }
    
`
export const BolosCard = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

`
export const BolosImageCard = styled.img`
    height: 9rem;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
`
export const BolosInfosContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`
export const BolosNameCard = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 1rem;
`
export const BolosAboutCard = styled.span`
    color: #fff;
    text-align: center;
    font-size: 0.8rem;
`
export const BolosCodCard = styled.h3`
    color: #fff;
    font-size: 0.8rem;
`
export const BolosMoreButton = styled.div`
    cursor: pointer;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    width: 4rem;
    font-size: 1rem;
    padding: 1px;
    background-color: rgb(86, 73, 41);
    display: none;
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
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    grid-column-gap: 2rem;
    margin: 0 4rem 0 5rem;
    border-bottom: 1px solid rgb(86, 73, 41);
`
export const CucasItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16rem;
    height: 19rem;
    transition: all 0.2s ease-out;
    border-radius: 5%;
    box-shadow: 0px 7px 10px rgba(1,1,1, 1);
    &:hover {
        transition: all 0.2s ease-out;
        height: 22rem;
        .Cucas-card{
            &:hover{
                background-image: linear-gradient(to right, rgb(86, 73, 41, 0.2),  rgba(1,0,0,0.0));
            }
        }
        .Cucas-button{
            display: block;
        }
    }
    
`
export const CucasCard = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

`
export const CucasImageCard = styled.img`
    height: 9rem;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
`
export const CucasInfosContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`
export const CucasNameCard = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 1rem;
`
export const CucasAboutCard = styled.span`
    color: #fff;
    text-align: center;
    font-size: 0.8rem;
`
export const CucasCodCard = styled.h3`
    color: #fff;
    font-size: 0.8rem;
`
export const CucasMoreButton = styled.div`
    cursor: pointer;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    width: 4rem;
    font-size: 1rem;
    padding: 1px;
    background-color: rgb(86, 73, 41);
    display: none;
    &:hover{
        background-color: #fff;
        color: rgb(86, 73, 41);
    }
`



