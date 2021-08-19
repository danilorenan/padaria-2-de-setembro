import styled from "styled-components";

export const HighLightContainer = styled.div`
    display: flex;
    position: relative;
    @media(max-width: 425px){
        
    }
`

export const ItemContainer = styled.div`
    height: 27rem;
    width: 100%;
    display: flex;
    margin-inline: auto;
    @media(max-width: 641px){
        height: 20rem;
    }
    @media(max-width: 505px){
        height: 20rem;
    }

    @media(max-width: 320px){
        margin-top: 3rem;
        height: 15rem;
        justify-content: center;
    }

    .paper{
        position: absolute;
        justify-content: center;
        align-items: center;
        display: flex;
        
    }
    img{
        min-height: 35rem;
        min-width: 100vw;
        width: 100%;

        @media(max-width: 505px){
            min-height: 20rem;
        }
    }
   
`
export const ContainerDescription = styled.div`
    display: flex;
    width: 100vw;
    z-index: 999;
    background-image: linear-gradient(to right, rgba(15.3, 14.9, 13.3),  rgba(1,0,0,0.0));
`
export const ItemDescription = styled.div`
    width: 30rem;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 1rem;
    flex-direction: column;
    margin-left: 0.5rem;

    @media(max-width: 505px){
        width: 100%;
        text-align: center;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .text-description {
        line-height: 3.3rem;
        font-size: 2.5rem;
        display: flex;

        @media(max-width: 768px){
            font-size: 1.5rem;
            line-height: 2.5rem;
            display: none;
        }

        @media(max-width: 505px){
            text-align: center;
            font-size: 1.5rem;
            
    }
    }
    
`
export const LogoImage = styled.img`
    min-width: 15%;
    height: 30%;
    position: absolute;
    z-index: 999;
    align-self: flex-end;
    background-color: rgba(1,1,1, 0.2);
    margin: 1rem;
    filter: saturate(260%) opacity(52%) contrast(120%) drop-shadow(0px 10px 400px #000000);
    -webkit-filter: saturate(260%) opacity(52%) contrast(120%) drop-shadow(0px 10px 400px #000000);
    -moz-filter: saturate(260%) opacity(52%) contrast(120%) drop-shadow(0px 10px 400px #000000);
    @media(max-width: 320px){
            display: none;
    }
`
