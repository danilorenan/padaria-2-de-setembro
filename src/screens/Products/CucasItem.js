import React from 'react';
import { CucasCard, 
    CucasItemContainer,
    CucasImageCard, 
    CucasInfosContainer,
    CucasNameCard,
    CucasAboutCard,
    CucasMoreButton,
    CucasCodCard,} from './styles';
import { Link } from 'react-router-dom';


const CucasItem = ({ item }) => {

    return (
        
            <CucasItemContainer>
            <CucasCard className='Cucas-card'>
                <CucasImageCard src={item.url} />
                <CucasInfosContainer>
                    <CucasNameCard>{item.title}</CucasNameCard>
                    {item.description? (
                        <CucasAboutCard><h3>Ingredientes:</h3> {item.description} </CucasAboutCard>
                    ):(
                    <CucasAboutCard>Não informado</CucasAboutCard>
                    )}
                    <CucasCodCard className='cucas-cod'>Cód: {item.cod}</CucasCodCard>
                    <a style={{textDecoration: 'none'}} href={item.url} download>
                        <CucasMoreButton className='Cucas-button'>Download</CucasMoreButton>
                    </a>
                </CucasInfosContainer>
            </CucasCard>
        </CucasItemContainer>
       
        
    )
}

export default CucasItem;
