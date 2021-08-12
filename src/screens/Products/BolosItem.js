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
    const ImageDownload = item.image; 

    return (
        <BolosItemContainer>
            <BolosCard className='Bolos-card'>
                <BolosImageCard src={item.image} />
                <BolosInfosContainer>
                    <BolosNameCard>{item.name}</BolosNameCard>
                    {item.ing? (
                        <BolosAboutCard><h3>Ingredientes:</h3> { item.ing } </BolosAboutCard>
                    ):(
                    <BolosAboutCard>Não informado</BolosAboutCard>
                    )}
                    <BolosCodCard className='bolos-cod'>Cód: {item.cod}</BolosCodCard>
                    <a style={{textDecoration: 'none'}} href={ImageDownload} download={`../../assets/ProductsImages/Bolos/${item.link}`}>
                        <BolosMoreButton className='Bolos-button'>Download</BolosMoreButton>
                    </a>
                </BolosInfosContainer>
            </BolosCard>
        </BolosItemContainer>
    )
}

export default BolosItem;