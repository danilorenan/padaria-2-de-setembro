import { ContainerAboutHome,
        ContainerInfosAbout,
        TitleAbout,
        TextAbout,
        MoreAbout } from "./styles";
import { Link } from 'react-router-dom'; 


const AboutHome = () => {
    return (
        <ContainerAboutHome>
            <ContainerInfosAbout>
                <TitleAbout>
                    Desde 1980
                </TitleAbout>
                <TextAbout>
                    A história da Padaria 2 de Setembro, teve início em 1980 na cidade de Blumenau – SC. Sr Evaristo e Dona Marlene que eram trabalhadores até então na indústria têxtil, resolveram empreender...E montaram uma pequena padaria nos fundos de sua casa. Situada na Rua Santa Quitéria, nº112 no bairro Itoupava Norte.
                </TextAbout>
                <MoreAbout>
                    <Link style={{textDecoration:'none', color: '#fff' }} to='/about'><div className='link-style'>Mais sobre a empresa...</div></Link>
                </MoreAbout>
            </ContainerInfosAbout>
        </ContainerAboutHome>
    )
}

export default AboutHome;
