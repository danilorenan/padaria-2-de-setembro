import React from 'react';
import Maps from '../Contact/Maps';
import Contact from '../../components/Contact/Contact';
import { LocalizationContainer,
        MapContainer,
        Map,
        TitleMap } from './styles';
import MapSC from '../../assets/santa-catarina.png';

const LocalizationScreen = () => {
    return (
        <LocalizationContainer>
            <MapContainer>
                <TitleMap>Nos melhores supermercados de Blumenau e região</TitleMap>
                <div className='map-background'>
                    <Map src={MapSC}/>
                </div>
            </MapContainer>
            <Contact />
        </LocalizationContainer>
    )
}

export default LocalizationScreen;
