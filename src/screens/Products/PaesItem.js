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
                    {item.ing? (
                    <PaesAboutCard><h3>Ingredientes:</h3>{item.ing} </PaesAboutCard>  

                    ):(<PaesAboutCard>Não informado</PaesAboutCard>)
                        }
                    <PaesCodCard className='paes-cod'>Cód: {item.cod}</PaesCodCard>
                    <Link style={{textDecoration: 'none'}} to='/contact'>
                        <PaesMoreButton className='paes-button'>Mais...</PaesMoreButton>
                    </Link>
                </PaesInfosContainer>
            </PaesCard>
        </PaesItemContainer>
    )
}

export default PaesItem;
