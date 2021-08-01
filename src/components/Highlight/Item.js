import React from 'react'
import { ItemContainer,
        ContainerDescription,
        ItemDescription } from './styles';
import { Paper } from '@material-ui/core';

const Item = ({ item }) => {
    return (
        <ItemContainer>
            <ContainerDescription>
                <ItemDescription>
                    <div className='text-description'>
                        {item.description}
                    </div>
                </ItemDescription>
            </ContainerDescription>
            <Paper className='paper'>
                <img src={item.image} />
            </Paper>
        </ItemContainer>
        
    )
}

export default Item;
