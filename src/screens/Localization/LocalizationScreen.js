import React from 'react';
import Maps from '../Contact/Maps';
import Contact from '../../components/Contact/Contact';
import { LocalizationContainer,
        MapContainer,
        Map,
        TitleMap,
        CitiesText } from './styles';
import MapSC from '../../assets/santa-catarina.png';
import { Helmet } from 'react-helmet';

const LocalizationScreen = () => {
    return (
        <LocalizationContainer>
            <Helmet>
                <title>Padaria 2 de Setembro</title>
                <meta name="description" content="Padaria 2 de Setembro local" />
            </Helmet>
            <MapContainer>
                <TitleMap>Nos melhores supermercados de Blumenau e região</TitleMap>
                <div className='map-background'>
                    <Map src={MapSC}/>
                    <div className='cities-text'>
                        <CitiesText><strong>Cidades abrangentes:</strong> Blumenau, Rio do Sul, Indaial, Gaspar, Brusque, Timbó, Rio dos Cedros, Presidente Getúlio, Vitor Meireles, Botuverá, Itapema, Tijucas, Balneário Camboriú, Itajaí, Navegantes, Piçarras, Barra Velha, Massaranduba, Guaramirim, Jaraguá do Sul, Corupá, Schroeder, Pomerode, Guabiruba, São Francisco do Sul, Araquari e Rodeio. </CitiesText>
                    </div>
                </div>
            </MapContainer>
            <Contact />
        </LocalizationContainer>
    )
}

export default LocalizationScreen;
