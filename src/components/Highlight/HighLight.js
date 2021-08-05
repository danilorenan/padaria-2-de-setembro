import { HighLightContainer,
        LogoImage } from "./styles";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import LogoMarca from '../../assets/logomarcapng4.png';


const HighLight = ({ ItemCarousel }) => {
    
    return (
        <HighLightContainer>
            <Carousel animation='slide' 
                      indicators={false} 
                      navButtonsAlwaysInvisible={true}
                      >
                {ItemCarousel?.map(item => {
                    return <Item item={item} key={item.id} />
                })}
            </Carousel>
            <LogoImage src={LogoMarca} />                
        </HighLightContainer>
    )
}

export default HighLight;
