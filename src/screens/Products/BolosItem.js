import React from 'react'
import { BolosCard, 
        BolosItemContainer,
        BolosImageCard, 
        BolosInfosContainer,
        BolosNameCard,
        BolosAboutCard,
        BolosMoreButton,
        BolosCodCard} from './styles';
import { Link } from 'react-router-dom'

const BolosItem = ({ item }) => {

    return (
        <BolosItemContainer>
            <BolosCard className='Bolos-card'>
                <BolosImageCard src={item.image} />
                <BolosInfosContainer>
                    <BolosNameCard>{item.name}</BolosNameCard>
                    <BolosAboutCard>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </BolosAboutCard>
                    <BolosCodCard>Cód: {item.cod}</BolosCodCard>
                    <Link style={{textDecoration: 'none'}} to='/contact'>
                        <BolosMoreButton className='Bolos-button'>Mais...</BolosMoreButton>
                    </Link>
                </BolosInfosContainer>
            </BolosCard>
        </BolosItemContainer>
    )
}

export default BolosItem;