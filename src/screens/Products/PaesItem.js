import React from 'react'
import { PaesCard, 
        PaesItemContainer,
        PaesImageCard, 
        PaesInfosContainer,
        PaesNameCard,
        PaesAboutCard,
        PaesMoreButton,
        PaesCodCard} from './styles';

const PaesItem = ({ item }) => {
    const ImageDownload = item.image; 

    return (
        <PaesItemContainer>
            <PaesCard className='paes-card'>
                <PaesImageCard src={item.image} />
                <PaesInfosContainer>
                    <PaesNameCard>{item.name}</PaesNameCard>
                    {item.ing? (
                    <PaesAboutCard><h3>Ingredientes:</h3>{item.ing} </PaesAboutCard>  

                    ):(<PaesAboutCard>Não informado</PaesAboutCard>)
                        }
                    <PaesCodCard className='paes-cod'>Cód: {item.cod}</PaesCodCard>
                        <a style={{textDecoration: 'none'}} href={ImageDownload} download={`../../assets/ProductsImages/Paes/${item.link}`}>
                            <PaesMoreButton className='paes-button'>Download</PaesMoreButton>
                        </a>
                </PaesInfosContainer>
            </PaesCard>
        </PaesItemContainer>
    )
}

export default PaesItem;
