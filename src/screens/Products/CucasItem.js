import React from 'react';
import { CucasCard, 
    CucasItemContainer,
    CucasImageCard, 
    CucasInfosContainer,
    CucasNameCard,
    CucasAboutCard,
    CucasMoreButton,
    CucasCodCard} from './styles';
import { Link } from 'react-router-dom';


const CucasItem = ({ item }) => {
    return (
        <CucasItemContainer>
            <CucasCard className='Cucas-card'>
                <CucasImageCard src={item.image} />
                <CucasInfosContainer>
                    <CucasNameCard>{item.name}</CucasNameCard>
                    <CucasAboutCard>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </CucasAboutCard>
                    <CucasCodCard>Cód: {item.cod}</CucasCodCard>
                    <Link style={{textDecoration: 'none'}} to='/contact'>
                        <CucasMoreButton className='Cucas-button'>Mais...</CucasMoreButton>
                    </Link>
                </CucasInfosContainer>
            </CucasCard>
        </CucasItemContainer>
    )
}

export default CucasItem;
