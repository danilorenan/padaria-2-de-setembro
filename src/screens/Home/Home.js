import React from 'react';
import HighLight from "../../components/Highlight/HighLight";
import AboutHome from "../../components/AboutHome/AboutHome";
import Destaque from "../../components/Destaque/Destaque";
import Contact from "../../components/Contact/Contact";
import ItemsCarousel  from '../../api/ItemsCarousel';
import { HomeContainer } from './styles';

const Home = () => {
   
    return (
        <HomeContainer> 
            <HighLight ItemCarousel={ItemsCarousel} />
            <AboutHome />
            <Destaque />
            <Contact />
        </HomeContainer>    
    )
}

export default Home;
