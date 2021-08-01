import { HighLightContainer,
        TestImage } from "./styles";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";

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
        </HighLightContainer>
    )
}

export default HighLight;
