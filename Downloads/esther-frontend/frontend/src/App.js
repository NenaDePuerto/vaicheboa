import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';

import Header from './Header';
import Home from './Home/Home';
import ShowCoworking from './Coworking/ShowCoworking'
import Login from './Auth/Login';
import Recovery from './Auth/Recovery';
import Register from './Auth/Register';
import CreateCoworking from './Coworking/CreateCoworking';
import Buscador from './Buscador/Buscador';
import Validate from './Auth/Validate';
import Reset from './Auth/Reset';
import Profile from './Usuario/Profile';
import MyCoworkings from './Coworking/MisCoworkings';
import UpdateUsuario from './Usuario/UpdateUsuario';
import MisReservas from './Reserva/MisReservas';
import UpdateCoworking from './Coworking/UpdateCoworking';
import Id_reserva from './Reserva/Id_reserva';
import Reservar from './Reserva/Reservar';
import Map from './Contacto/Map';
import Contacto from './Contacto/Contacto'


import Footer from './Footer';

function App() {

  const login = useSelector(s => s.login)

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact>
          <Home /> 
          <Map/>
          <Contacto/>      
        </Route>
        <Route path='/Contacto'>
          <Contacto/>
        </Route>
        <Route path='/Reserva/Reservar' exact>
        <Reservar/>
        </Route>
        <Route path='/Login' exact>
          <Login />
        </Route>
        <Route path='/Register' exact>
          <Register />
        </Route>
        <Route path='/Usuario/Profile' exact>
          <Profile/>
        </Route>
        <Route path='/validate/:code' exact>
          <Validate />
          <Login />
        </Route>
        <Route path='/recovery' exact>
          <Recovery />
        </Route>
        <Route path='/reset/:code' exact>
          <Reset />
        </Route>
        <Route path='/usuario/update/:id' exact>
          {login ?
            <UpdateUsuario />
            : <Redirect to='/' />}
        </Route>
        <Route path='/usuario/coworking/:id' exact>
          {login ?
            <MyCoworkings />
            : <Redirect to='/' />}
        </Route>
        <Route path='/usuario/:id'>
          {login ?
            <Profile />
            : <Redirect to='/' />}
        </Route>
        <Route path='/usuarioCliente' exact>
          {login ?
            <MisReservas />
            : <Redirect to='/' />}
        </Route>
        <Route path='/reserva/:id' exact>
          {login ?
            <Id_reserva />
            : <Redirect to='/' />}
        </Route>
        <Route path='/buscador/:cityUrl?'>
          <Buscador />
        </Route>
        <Route path='/Coworking/CreateCoworking' exact>          
            <CreateCoworking />      
        </Route>
        <Route path='/myCoworkings/:id' exact>          
            <UpdateCoworking />
        </Route>
        <Route path='/buscador' exact>
          <div className='buscador'>
            <Buscador />
          </div>
        </Route>
        <Route path='/coworking/:id' exact>
          <ShowCoworking />
        </Route>
        <Route path='/' exact>Vaya, página no encontrada </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;


