import React, {useState} from 'react';
import { NavbarContainer,
        LogoNavbar,
        MenuNavbar,
        LogoImage,
        MenuContainer,
        FaceIcon, 
        IconMenu,
        LogoImageMenu} from './styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/2desetembrologo.png';
import cloudsImage from '../../assets/clouds.png'

const Navbar = () => {
    const [sidebar, toggleSidebar] = useState(false);
    const handleToggleSidebar = () => toggleSidebar(value => !value);
    console.log(sidebar)
    return (
        <NavbarContainer>
            <LogoNavbar>
                <img className='clouds-img' src={cloudsImage}/>
                <Link to='/'>
                    <LogoImage src={logo} alt='Logo'/>
                </Link>
            </LogoNavbar>
            <MenuNavbar>
            <Link to='/'>
                <LogoImageMenu src={logo} alt='Logo' />
            </Link>                
                <MenuContainer 
                className={sidebar? 'sidebar open' : 'sidebar'}
                onClick={() => handleToggleSidebar(true)}>
                        <Link to='/' style={{textDecoration:'none', color: '#fff'}}>
                            <li>
                                Home
                            </li>
                        </Link>
                        <Link to='/products' style={{textDecoration:'none', color: '#fff'}}>
                            <li>
                                Produtos
                            </li>
                        </Link>
                        <Link to='/about' style={{textDecoration:'none', color: '#fff'}}>
                            <li>
                                Sobre nós
                            </li>
                        </Link>
                        <Link to='/contact' style={{textDecoration:'none', color: '#fff'}}>
                            <li>
                                Contato
                            </li>
                        </Link>
                        <Link to='/localization' style={{textDecoration:'none', color: '#fff'}}>
                            <li>
                                Onde nos encontrar
                            </li>
                        </Link>
                        {/* <div className='menu-icons'>
                            <a style={{textDecoration:'none', color: '#fff'}} href='https://www.facebook.com/pages/Padaria%202%20de%20Setembro/489603607878674/'>
                                <FaceIcon></FaceIcon> 
                            </a>
                        </div> */}
                        
                                      
                </MenuContainer>
                
                <IconMenu onClick={() => handleToggleSidebar()}></IconMenu>
            </MenuNavbar>
        </NavbarContainer>
    )
}

export default Navbar;
