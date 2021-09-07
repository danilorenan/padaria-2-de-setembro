import React, { useState, useEffect } from 'react'

import PaesItem from './PaesItem';
import BolosItem from './BolosItem';
import CucasItem from './CucasItem';
import { ContainerProducts,
        PaesTitle,
        PaesContainer,
        BolosTitle,
        BolosContainer,
        CucasTitle,
        CucasContainer,
        SpaceComponent
         } from './styles';
import { Helmet } from 'react-helmet';
import api from '../../api/api';

const ProductsScreen = ({  }) => {
    const [paes, setPaes] = useState([])
    const [bolos, setBolos] = useState([])
    const [cucas, setCucas] = useState([])

    useEffect(() => {
        async function fetchData() {
             const res =  await api.get('products');
             const resBolos = await api.get('bolos');
             const resCucas = await api.get('cucas');
             setPaes(res.data)
             setCucas(resCucas.data)
             setBolos(resBolos.data)
         }
         fetchData()
         
     }, [])
    return (
        <ContainerProducts>
            <Helmet>
                <title>Padaria 2 de Setembro</title>
                <meta name="description" content="Padaria 2 de Setembro produtos" />
            </Helmet>
            <PaesTitle>Pães</PaesTitle>
            <PaesContainer>
                {paes.map(item => {
                    return (
                    <PaesItem item={item} key={item._id}/>)
                })}
            </PaesContainer>
            <BolosTitle>Bolos</BolosTitle>
            <BolosContainer>
                {bolos.map(item => {
                    return <BolosItem item={item} key={item.id}/>
                })}
            </BolosContainer>
            <CucasTitle>Cucas</CucasTitle>
            <CucasContainer>
                {cucas.map(item => {
                    return <CucasItem item={item} key={item.id}/>
                })}
            </CucasContainer>
        </ContainerProducts>
          
    )
}

export default ProductsScreen;
