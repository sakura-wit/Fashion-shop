
import './App.css';
import './styles/cover.css'
import './styles/homepage.css'
import './styles/common.css'
import './styles/checkout.css'
import './styles/detail.css'
import './styles/cart.css'
import './styles/login.css'
import './styles/forgot.css'
import './styles/register.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HomePage } from './Pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { ProductPage } from './Pages/ProductPage';
import { CheckOut } from './Pages/CheckOut';
import TestForm from './Pages/TestForm';
import { DetailProductPage } from './Pages/DetailProductPage';
import { ShoppingCart } from './Pages/ShoppingCart';
import {LoginPage} from './Pages/Login';
import { ForgotPage } from './Pages/Forgot';
import { RegisterPage } from './Pages/Register';


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='products' element={<ProductPage />} />
        <Route path='checkout' element={<CheckOut />} />
        <Route path='test' element={<TestForm />} />
        <Route path='/detail' element={<DetailProductPage />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/forgot' element={<ForgotPage/>} />
        <Route path='/register' element={<RegisterPage/>} />

        {/* <Route path='/detail' element={<DetailPage />} />
        <Route path='/homepage' element={<HomePage />} /> */}
        {/* <Route path='/' element={IntroducePage} /> */}

      </Routes>
    </div>
  );
}

export default App;
