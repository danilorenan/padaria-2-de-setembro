import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import AboutScreen from "./screens/About/AboutScreen";
import ContactScreen from './screens/Contact/ContactScreen';
import ProductsScreen from "./screens/Products/ProductsScreen";
import LocalizationScreen from './screens/Localization/LocalizationScreen';
import { AppContainer } from "./styles";
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const App = () => {
  
  return (
      <AppContainer>
      <Helmet>
        <title>Padaria 2 de Setembro</title>
        <meta name="description" content="Padaria 2 de Setembro" />
      </Helmet>

        <Navbar />
        <Switch>
          <Route path='/' exact>
              <Home />
          </Route>
          <Route path='/about'>
              <AboutScreen />
          </Route>
          <Route path='/contact'>
              <ContactScreen />
          </Route>
          <Route path='/products'>
              <ProductsScreen />
          </Route>
          <Route path='/localization'>
              <LocalizationScreen />
          </Route>
        </Switch>
        <Footer />
      </AppContainer>
      
     
    
  );
}

export default App;
