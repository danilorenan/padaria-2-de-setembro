import React from 'react'
import { PaesItems } from '../../api/ItemsProducts';
import { BolosItems } from '../../api/ItemsProducts';
import { CucasItems } from '../../api/ItemsProducts';
import PaesItem from './PaesItem';
import BolosItem from './BolosItem';
import CucasItem from './CucasItem';
import { ContainerProducts,
        PaesTitle,
        PaesContainer,
        BolosTitle,
        BolosContainer,
        CucasTitle,
        CucasContainer
         } from './styles';
import { Helmet } from 'react-helmet';

const ProductsScreen = () => {
    return (
        <ContainerProducts>
            <Helmet>
                <title>Padaria 2 de Setembro</title>
                <meta name="description" content="Padaria 2 de Setembro produtos" />
            </Helmet>
            <PaesTitle>Pães</PaesTitle>
            <PaesContainer>
                {PaesItems.map(item => {
                    return <PaesItem item={item} key={item.id}/>
                })}
            </PaesContainer>
            <BolosTitle>Bolos</BolosTitle>
            <BolosContainer>
                {BolosItems.map(item => {
                    return <BolosItem item={item} key={item.id}/>
                })}
            </BolosContainer>
            <CucasTitle>Cucas</CucasTitle>
            <CucasContainer>
                {CucasItems.map(item => {
                    return <CucasItem item={item} key={item.id}/>
                })}
            </CucasContainer>
        </ContainerProducts>
          
    )
}

export default ProductsScreen;
