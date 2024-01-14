import "./App.css";
import "./styles/cover.css";
import "./styles/homepage.css";
import "./styles/common.css";
import "./styles/checkout.css";
import "./styles/detail.css";
import "./styles/cart.css";
import "./styles/homeadmin.css";

import "./styles/login.css";
import "./styles/register.css";
import "./styles/forgot.css";

import "./styles/profile.css";

import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HomePage } from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./Pages/ProductPage";
import { CheckOut } from "./Pages/CheckOut";
import TestForm from "./Pages/TestForm";
import { DetailProductPage } from "./Pages/DetailProductPage";
import { ShoppingCart } from "./Pages/ShoppingCart";
import { TestRedux } from "./Pages/TestRedux";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { SignPage } from "./Pages/SignPage";
import { SignUpPage } from "./Pages/SignUpPage";
import { LoginPage } from "./Pages/Login";
import { RegisterPage } from "./Pages/Register";
import { HomeAdmin } from "./Pages/HomeAdmin";
import { InforUser } from "./Pages/InforUser";
import { jwtDecode } from "jwt-decode";
import { isJsonString } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from './service/UserService'
import { userAction } from "./redux/Slice/UserSlice";
import { updateProductCur } from "./redux/Slice/ProductSlice";
import { intercepterRequest, makeRequest } from "./api/axios/request";
import { routes } from "./routes";
import { MainLayout } from "./Layouts/MainLayout";
import { Fragment, useEffect } from "react";


function App() {

  const dispash = useDispatch()

  const oldID = useSelector((state) => state.user.dataUser?._id)

  useEffect(() => {
    let storageData = localStorage.getItem('access_token')

    if (storageData) {

      const { storageData, decode } = handleDecode()
      if (decode.payload?.id) {
        handleGetDetailsUser(decode.payload?.id, storageData)
      }

    }

  }, [])


  const handleDecode = () => {
    let storageData = localStorage.getItem('access_token')
    let decode = {}
    if (storageData) {
      decode = jwtDecode(storageData)
      return { decode, storageData }
    }
  }

  const handleGetDetailsUser = async (id, data) => {
    try {
      const dataUser = await UserService.getUserApi.getDetailUser(id, data);
      dispash(userAction.update(dataUser.data));
      if (dataUser.data.cart !== undefined) {
        dispash(updateProductCur([...dataUser.data.cart]));
      }
    } catch (error) {

    }

  }

  const user = useSelector((state) => state.user.dataUser)

  return (
    <div>
      <Routes>

        {
          routes?.map((route, key) => {
            const Pages = route.page
            const isCheckAuth = !route.isPrivate || user.isAdmin
            const Layout = route.isShowHeader ? MainLayout : Fragment
            return (

              <Route key={key} path={isCheckAuth ? route.path : (user.isAdmin ? '/admin' : '/homepage')} element={
                <Layout>
                  <Pages />
                </Layout>
              } />

            )
          })
        }

      </Routes>
    </div >
  );
}

export default App;
