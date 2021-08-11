import styled from "styled-components";


export const ContainerDestaque = styled.div`
    background-color: #564929;
    width: 100%;
    height: 80rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px){
        padding: 0.5rem;
        height: 70rem;
    }

    @media (max-width: 550px){
        padding: 0.5rem;
    }

    @media (max-width: 425px){
        padding: 0.5rem;
    }

    
`
export const TitleDestaque = styled.h1`
    font-size: 2rem;
    color: #fff;
    margin: 1rem;
    @media (max-width: 1024px){
        margin: 1rem;
    }

    @media(max-width: 768px){
        font-size: 1.5rem;
    }

    @media (max-width: 425px){
        font-size: 1rem;
    }
`
export const ContainerItemDestaque = styled.div`
    width: 70vw;
    height: 30rem;
    background-color: #272622;
    display: flex;
    margin: 1rem;

    @media (max-width: 1024px){
        width:70vw;
        
    }
    
    @media (max-width: 768px){
        width:20rem;
        
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 550px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50vw;
    }
    @media (max-width: 425px){
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80vw;
        
    }
    
`
export const ContainerDescriptionItem = styled.div`
    padding: 1rem;
    width: 50%;
    background-color: #272622;
    display: flex;
    flex-direction: column;
    border: 6px double #564929;
    margin: 2rem;
    justify-content: center;

    @media (max-width: 1024px){
        margin: 1rem;
        justify-content: space-between;
    }

    @media (max-width: 768px){
        padding: 1rem;
        height: 50%;
        width: auto;
    }

    @media (max-width: 660px){
        padding: 1rem;
    }
    @media (max-width: 550px){
        padding: 0.5rem;
        height: 50%;
        width: auto;
    }
    @media (max-width: 425px){
        height: 50%;
        width: auto;
        padding: 0.5rem;
    }

    .fix-align {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export const TitleItemDestaque = styled.h2`
    text-align: center;
    font-size: 1.5rem;
    color: #fff;
    
    @media (max-width: 768px){
        font-size: 1rem;
    }

    @media (max-width: 425px){
        font-size: 1rem;
    }
`
export const DescriptionItemDestaque = styled.span`
    margin-top: 1rem;
    color: #fff;
    padding: 2rem;
    font-size: 1.2rem;

    @media (max-width: 1106px){
        font-size: 1.1rem;
        padding: 1rem;
    }
    @media (max-width: 768px){
        font-size: 0.8rem;
    }
    @media (max-width: 425px){
        font-size: 0.8rem;
    }
`
export const MoreItems = styled.div`
    color: #fff;
    text-align: center;
    cursor: pointer;

    .link-style {
        &:hover {
            color: black;
        }
    }

    &:hover {
        color: #272622;
        background-color: #fff;
    }
`
export const ImageItemDestaque = styled.img`
    width: 50%;
    background-size: cover;
    object-fit: center;

    @media (max-width: 768px){
        margin: 0;
        overflow: hidden;
        height: 50%;
        width: 100%;
    }

    @media (max-width: 550px){
        height: 50%;
        width: 100%;
    }

    @media (max-width: 425px){
        height: 50%;
        overflow: hidden;
    }
`