import { ContainerDescriptionItem, ContainerDestaque, 
        ContainerImageItemDestaque, 
        ContainerItemDestaque, 
        DescriptionItemDestaque, 
        ImageItemDestaque, 
        MoreItems, 
        TitleDestaque, 
        TitleItemDestaque} from "./styles";
import DestaqueImage from '../../assets/DestaqueImage.jpg';

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
                        <MoreItems>Mais produtos...</MoreItems>
                    </div>
                </ContainerDescriptionItem>
            </ContainerItemDestaque>
        </ContainerDestaque>
    )
}

export default Destaque;
