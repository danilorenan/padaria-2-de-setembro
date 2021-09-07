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
                <BolosImageCard src={item.url} />
                <BolosInfosContainer>
                    <BolosNameCard>{item.title}</BolosNameCard>
                    {item.description? (
                        <BolosAboutCard><h3>Ingredientes:</h3> { item.description } </BolosAboutCard>
                    ):(
                    <BolosAboutCard>Não informado</BolosAboutCard>
                    )}
                    <BolosCodCard className='bolos-cod'>Cód: {item.cod}</BolosCodCard>
                    <a style={{textDecoration: 'none'}} href={item.url} download>
                        <BolosMoreButton className='Bolos-button'>Download</BolosMoreButton>
                    </a>
                </BolosInfosContainer>
            </BolosCard>
        </BolosItemContainer>
    )
}

export default BolosItem;