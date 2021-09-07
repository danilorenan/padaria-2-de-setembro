import React, { useEffect, useState } from 'react';
import HighLight from "../../components/Highlight/HighLight";
import AboutHome from "../../components/AboutHome/AboutHome";
import Destaque from "../../components/Destaque/Destaque";
import Contact from "../../components/Contact/Contact";
import { HomeContainer } from './styles';
import { Helmet } from 'react-helmet';
import api from '../../api/api';

const Home = () => {

    const [banner, setBanner] = useState([])

    useEffect(() => {
        const getFile = async () => {
           const res = await api.get('posts')
            setBanner(res.data)
            console.log(banner)
        }
        getFile()
    },[])

        return (
            <HomeContainer>
                <Helmet>
                    <title>Padaria 2 de Setembro</title>
                    <meta name="description" content="Padaria 2 de Setembro" />
                </Helmet> 
                <HighLight ItemCarousel={banner} />
                <AboutHome />
                <Destaque />
                <Contact />
            </HomeContainer>    
        )  
}

export default Home;
