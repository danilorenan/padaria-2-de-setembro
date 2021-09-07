import React from 'react'
import { ItemContainer,
        ContainerDescription,
        ItemDescription, 
        LogoImage} from './styles';
import { Paper } from '@material-ui/core';
const Item = ({ item }) => {
    return (
        <ItemContainer>
            <ContainerDescription>
                <ItemDescription>
                    <div className='text-description'>
                    
                    </div>
                    
                </ItemDescription>
            </ContainerDescription>
            
        
            <Paper className='paper'>
                <img className='image-carousel' src={item.url} />
            </Paper>
        </ItemContainer>
        
    )
}

export default Item;
