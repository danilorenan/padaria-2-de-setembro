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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </TextAbout>
                <MoreAbout>
                    <Link style={{textDecoration:'none', color: '#fff' }} to='/about'><div className='link-style'>Mais sobre a empresa...</div></Link>
                </MoreAbout>
            </ContainerInfosAbout>
        </ContainerAboutHome>
    )
}

export default AboutHome;
