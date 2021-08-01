import React from 'react';
import { MapsContainer, MapTitle } from './styles';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const Maps = () => {
    
    const position = [-26.89279, -49.06550];

    return (
        <MapsContainer>
            <MapTitle>Caso queira fazer uma visita</MapTitle>
            <MapContainer 
                center={position} 
                zoom={15} 
                scrollWheelZoom={false}
                className='map-style'
                // style={{width:'500px', height:'500px'}}
                dragging={false}
                >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright"></a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                Padaria <br /> 2 de Setembro
                </Popup>
            </Marker>
            </MapContainer>
        </MapsContainer>
        
    )
}

export default Maps;
