
import './App.css';
import './styles/cover.css'
import './styles/homepage.css'
import './styles/common.css'
import './styles/checkout.css'
import './styles/detail.css'
import './styles/cart.css'

import './styles/login.css'
import './styles/register.css'
import './styles/forgot.css'


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
import { TestRedux } from './Pages/TestRedux';
import { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { SignPage } from './Pages/SignPage';
import { SignUpPage } from './Pages/SignUpPage';
import { LoginPage } from './Pages/Login';
import { RegisterPage } from './Pages/Register';




function App() {

  // useEffect(() => {
  //   fetchApi()
  // }, [])



  // const fetchApi = async () => {
  //   const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/product/get-allProduct`)
  //   return res.data
  // }

  // const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })
  // console.log('query', query);

  return (
    <div >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/test' element={<TestForm />} />
        <Route path='/detail' element={<DetailProductPage />} />
        <Route path='/cart' element={<ShoppingCart />} />


        {/* Test */}
        <Route path='/test-redux' element={<TestRedux />} />
        <Route path='/test-sign' element={<LoginPage />} />
        <Route path='/sign-up' element={<RegisterPage />} />

        {/* <Route path='/detail' element={<DetailPage />} />
        <Route path='/homepage' element={<HomePage />} /> */}
        {/* <Route path='/' element={IntroducePage} /> */}

      </Routes>
    </div>
  );
}

export default App;
