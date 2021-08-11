import { ContainerDescriptionItem, ContainerDestaque, 
        ContainerImageItemDestaque, 
        ContainerItemDestaque, 
        DescriptionItemDestaque, 
        ImageItemDestaque, 
        MoreItems, 
        TitleDestaque, 
        TitleItemDestaque} from "./styles";
import DestaqueImage from '../../assets/DestaqueImage.jpg';
import DestaqueImage2 from '../../assets/ImageDestaque2.jpg';
import { Link } from 'react-router-dom';

const Destaque = () => {
    return (
        <ContainerDestaque>
            <TitleDestaque>O pão que os Catarinenses amam</TitleDestaque>
            <ContainerItemDestaque>
                <ImageItemDestaque src={DestaqueImage} />
                <ContainerDescriptionItem>
                    <TitleItemDestaque>Pão caseiro 2 de Setembro</TitleItemDestaque>
                    <DescriptionItemDestaque>Pão caseiro rico em nutrientes, assado em forno a lenha. Feito por quem sabe e com o gostinho que só a 2 de Setembro tem.</DescriptionItemDestaque>
                    <div className='fix-align'>
                        <MoreItems>
                            <Link style={{textDecoration:'none', color: '#fff'}} to='/products'><div className='link-style'>Mais produtos...</div></Link>
                        </MoreItems>
                    </div>
                </ContainerDescriptionItem>
            </ContainerItemDestaque>
            <ContainerItemDestaque>
                <ContainerDescriptionItem>
                    <TitleItemDestaque>Cuca de farofa</TitleItemDestaque>
                    <DescriptionItemDestaque>Cuca de farofa caseira, assada no forno a lenha. Para quem quer ter uma vida doce e leve, sem perder os melhores sabores da vida.</DescriptionItemDestaque>
                    <div className='fix-align'>
                        <MoreItems>
                            <Link style={{textDecoration:'none', color: '#fff'}} to='/products'><div className='link-style'>Mais produtos...</div></Link>
                        </MoreItems>
                    </div>
                </ContainerDescriptionItem>
                <ImageItemDestaque src={DestaqueImage2} />
            </ContainerItemDestaque>
        </ContainerDestaque>
    )
}

export default Destaque;
