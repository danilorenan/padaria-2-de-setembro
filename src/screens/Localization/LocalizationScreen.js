import React from 'react';
import Maps from '../Contact/Maps';
import Contact from '../../components/Contact/Contact';
import { LocalizationContainer,
        MapContainer,
        Map,
        TitleMap,
        CitiesText } from './styles';
import MapSC from '../../assets/santa-catarina.png';

const LocalizationScreen = () => {
    return (
        <LocalizationContainer>
            <MapContainer>
                <TitleMap>Nos melhores supermercados de Blumenau e região</TitleMap>
                <div className='map-background'>
                    <Map src={MapSC}/>
                    <div className='cities-text'>
                        <CitiesText><strong>Cidades abrangentes:</strong> Blumenau, Indaial, Gaspar, Brusque, Timbó, Rio dos Cedros, Presidente Getúlio, Vitor Meireles, Botuverá, Itapema, Tijucas, Balneário Camboriú, Itajaí, Navegantes, Piçarras, Barra Velha, Massaranduba, Guaramirim, Jaraguá do Sul, Corupá, Shoereder, Pomerode e Rodeio. </CitiesText>
                    </div>
                </div>
            </MapContainer>
            <Contact />
        </LocalizationContainer>
    )
}

export default LocalizationScreen;
