import React, {useState, useEffect} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import AboutScreen from "./screens/About/AboutScreen";
import ContactScreen from './screens/Contact/ContactScreen';
import ProductsScreen from "./screens/Products/ProductsScreen";
import LocalizationScreen from './screens/Localization/LocalizationScreen';
import Login from "./screens/Login/Login";
import { AppContainer } from "./styles";
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import api from './api/api';
import Admin from './screens/Login/Admin';

const App = () => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('')
    const [passSuccess, setPassSuccess] = useState()
    const [passError, setPassError] = useState('')
    const [productItem, setproductItem] = useState([])
    const history = useHistory();

    const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      passSuccess !== undefined ? (
        <Component {...props} />
        
      ) : (
        <Redirect to={{ pathname: '/', state: {from: props.location} }} />
      )
    )} />
  )

  const handleSubmit = async () => {
    const res = await api.post('login', {"email": emailInput, "password": passwordInput})
    if (res.data === 'Success'){
      setPassSuccess(true);
      console.log(res.data)
      history.push('/admin')
    }else{
        setPassError(res.data)
        console.log(res.data)
    }
    
}


  useEffect(() => {
      const getFile = async () => {
        const res =  await api.get('products');
          setproductItem(res.data)
          console.log(productItem)
      }
      getFile()
  },[])

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
              <ProductsScreen productItem={productItem} />
          </Route>
          <Route path='/localization'>
              <LocalizationScreen />
          </Route>
          <Route path='/login'>
            <Login 
              handleSubmit={handleSubmit} 
              email={emailInput} 
              setEmail={setEmailInput} 
              password={passwordInput}
              setPassword={setPasswordInput}
              passError={passError} 
            />
          </Route>
          <PrivateRoute path='/admin' component={Admin} />
        </Switch>
        <Footer />
      </AppContainer>
      
     
    
  );
}

export default App;
