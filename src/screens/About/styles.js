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