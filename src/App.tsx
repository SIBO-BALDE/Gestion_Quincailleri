import React from 'react';

// import HomeScreen from './Screens/HomeScreen/HomeScreen';
import ProductScreen from './Screens/ProductScreen/ProductScreen';
import ContactScreen from './Screens/ContactScreen/ContactScreen';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import Login from './Screens/Auth/Login/Login';
import DashboardAdim from './Screens/Dasboards/DasboardAdmin/DasboardAdmin';
import GestionVendeur from './Screens/GestionContent/GestionVendeur';
import DasboardVendeur from './Screens/Dasboards/DasboardVendeur/DasboardVendeur';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<HomeScreen/>}></Route>
      <Route path='/product' element={<ProductScreen/>}></Route>
      <Route path='/contact' element={<ContactScreen/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dasboardadmin' element={<DashboardAdim/>}></Route>
      <Route path='/dasboaruser' element={<DasboardVendeur/>}></Route>
      
    </Routes>
    </div>
  );
}

export default App;
