import styled from "styled-components";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import MenuIcon from '@material-ui/icons/Menu';

export const NavbarContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`

export const LogoNavbar = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background: rgb(35,56,56);
    background: radial-gradient(circle, rgba(35,56,56,1) 31%, rgba(86,73,41,1) 100%);  
    height: 8rem;
    z-index: 999;
    overflow: hidden;

    .clouds-img {
        position: absolute;
        z-index: -1;
        height: auto;
        width: 100%;
        object-fit: center;
    }

    @media(max-width: 570px){
        display: none
    }
    
`
export const LogoImage = styled.img`
    width: 11rem;
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 100%;
    margin: 0;
    background-color: #fff;
    z-index: 999;
`

export const MenuNavbar = styled.div`
    color: #fff;
    background-color: #272622;
    border-bottom: 4px solid #564929;
    height: 4.5rem;
    width: 100%;
    overflow: hidden;
    

    .test-relative {
        /* position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        background-color: red; */
    }

    @media(max-width: 570px){
        display: flex;
        width: 100vw;
        align-items: center;
        justify-content: space-between;
        background-color: #564929;
        padding: 0 2rem 0 2rem;
        position: fixed;
        z-index: 1000;
    }
`
export const LogoImageMenu = styled.img`
    display: none;

    @media(max-width: 570px){
        display: block;
        width: 6.5rem;
        height: 4rem;
        border: 1px solid #fff;
        border-radius: 100%;
        margin: 0;
        background-color: #fff;
    }    
`
export const MenuContainer = styled.ul`
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 100%;
    list-style: none;
    padding: 1rem;
    cursor: pointer;
    overflow: hidden;

   
    
    li{
        @media(max-width: 632px){
        font-size: 0.8rem;
    }
    }

    &.open{
        @media(max-width: 570px){
            transform: translateX(0);
            position: fixed;
            z-index: 1000;
            transition: all 0.5s ease;
            justify-content: space-around;
            align-items: center;
            font-size: 1rem;
        }
    }
    @media(max-width: 570px){
        position: absolute;
        top: 4.5rem;
        right: 0;
        width: 50vw;
        height: 90vh;
        z-index: 1000;
        background-color: #272622;
        flex-direction: column;
        justify-content: space-between;
        transform: translateX(100%);
        transition: all 0.5s ease;
        
        li{
            text-align: center;
            font-size: 1rem;
            margin: 0;
            
        }
    }

    li {
        margin: 1rem;
        &:hover{
            color: #8a817c;
        }
    }
    .menu-icons {
        display: flex;
        width: 4rem;
        align-items: center;
        justify-content: center;
    }
`
export const WhatsIcon = styled(WhatsAppIcon)`
    &:hover{
        color: #8a817c;
    }
`
export const FaceIcon = styled(FacebookIcon)`
    &:hover{
        color: #8a817c;
    }
` 
export const IconMenu = styled(MenuIcon)`
    display: block;
    cursor: pointer;
`