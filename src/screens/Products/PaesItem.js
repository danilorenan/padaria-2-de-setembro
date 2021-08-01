import React from 'react'
import { PaesCard, 
        PaesItemContainer,
        PaesImageCard, 
        PaesInfosContainer,
        PaesNameCard,
        PaesAboutCard,
        PaesMoreButton,
        PaesCodCard} from './styles';
import { Link } from 'react-router-dom';

const PaesItem = ({ item }) => {

    return (
        <PaesItemContainer>
            <PaesCard className='paes-card'>
                <PaesImageCard src={item.image} />
                <PaesInfosContainer>
                    <PaesNameCard>{item.name}</PaesNameCard>
                    <PaesAboutCard>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </PaesAboutCard>
                    <PaesCodCard>Cód: {item.cod}</PaesCodCard>
                    <Link style={{textDecoration: 'none'}} to='/contact'>
                        <PaesMoreButton className='paes-button'>Mais...</PaesMoreButton>
                    </Link>
                </PaesInfosContainer>
            </PaesCard>
        </PaesItemContainer>
    )
}

export default PaesItem;
