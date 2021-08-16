import React from 'react';
import HighLight from "../../components/Highlight/HighLight";
import AboutHome from "../../components/AboutHome/AboutHome";
import Destaque from "../../components/Destaque/Destaque";
import Contact from "../../components/Contact/Contact";
import ItemsCarousel  from '../../api/ItemsCarousel';
import { HomeContainer } from './styles';
import { Helmet } from 'react-helmet';

const Home = () => {
   
    return (
        <HomeContainer>
            <Helmet>
                <title>Padaria 2 de Setembro</title>
                <meta name="description" content="Padaria 2 de Setembro" />
            </Helmet> 
            <HighLight ItemCarousel={ItemsCarousel} />
            <AboutHome />
            <Destaque />
            <Contact />
        </HomeContainer>    
    )
}

export default Home;
