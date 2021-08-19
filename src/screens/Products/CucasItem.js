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
    const ImageDownload = item.image; 

    return (
        
            <CucasItemContainer>
            <CucasCard className='Cucas-card'>
                <CucasImageCard src={item.image} />
                <CucasInfosContainer>
                    <CucasNameCard>{item.name}</CucasNameCard>
                    {item.ing? (
                        <CucasAboutCard><h3>Ingredientes:</h3> {item.ing} </CucasAboutCard>
                    ):(
                    <CucasAboutCard>Não informado</CucasAboutCard>
                    )}
                    <CucasCodCard className='cucas-cod'>Cód: {item.cod}</CucasCodCard>
                    <a style={{textDecoration: 'none'}} href={ImageDownload} download={`../../assets/ProductsImages/Cucas/${item.link}`}>
                        <CucasMoreButton className='Cucas-button'>Download</CucasMoreButton>
                    </a>
                </CucasInfosContainer>
            </CucasCard>
        </CucasItemContainer>
       
        
    )
}

export default CucasItem;
