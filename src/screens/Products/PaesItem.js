import React from 'react'
import { PaesCard, 
        PaesItemContainer,
        PaesImageCard, 
        PaesInfosContainer,
        PaesNameCard,
        PaesAboutCard,
        PaesMoreButton,
        PaesCodCard} from './styles';

const PaesItem = ({ item, key }) => {
    const ImageDownload = item.image; 

    return (
        <PaesItemContainer>
            <PaesCard className='paes-card'>
                <PaesImageCard src={item.url} />
                <PaesInfosContainer>
                    <PaesNameCard>{item.title}</PaesNameCard>
                    {item.description? (
                    <PaesAboutCard><h3>Ingredientes:</h3>{item.description} </PaesAboutCard>  

                    ):(<PaesAboutCard>Não informado</PaesAboutCard>)
                        }
                    <PaesCodCard className='paes-cod'>Cód: {item.cod}</PaesCodCard>
                        <a style={{textDecoration: 'none'}} href={item.url} download>
                            <PaesMoreButton className='paes-button'>Download</PaesMoreButton>
                        </a>
                </PaesInfosContainer>
            </PaesCard>
        </PaesItemContainer>
    )
}

export default PaesItem;
