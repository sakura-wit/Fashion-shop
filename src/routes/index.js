import { CheckOut } from "../Pages/CheckOut";
import { DetailProductPage } from "../Pages/DetailProductPage";
import { HomeAdmin } from "../Pages/HomeAdmin";
import { HomePage } from "../Pages/HomePage";
import { InforUser } from "../Pages/InforUser";
import { LoginPage } from "../Pages/Login";
import { ProductPage } from "../Pages/ProductPage";
import { RegisterPage } from "../Pages/Register";
import { ShoppingCart } from "../Pages/ShoppingCart";
import { AoPage } from "../Pages/TypeProduct/AoPage";
import { QuanPage } from "../Pages/TypeProduct/QuanPage";


export const routes = [
    {
        path: "/",
        page: HomePage,
        isShowHeader: true
    },

    {
        path: "/products",
        page: ProductPage,
        isShowHeader: true
    },

    {
        path: "/checkout",
        page: CheckOut,
        isShowHeader: true
    },

    {
        path: "/detail",
        page: DetailProductPage,
        isShowHeader: true
    },

    {
        path: "/cart",
        page: ShoppingCart,
        isShowHeader: true
    },

    {
        path: "/sign-in",
        page: LoginPage,
        isShowHeader: true
    },

    {
        path: "/sign-up",
        page: RegisterPage,
        isShowHeader: true
    },

    {
        path: "/admin",
        page: HomeAdmin,
        isShowHeader: false,
        isPrivate: true
    },

    {
        path: "/profile",
        page: InforUser,
        isShowHeader: true
    },

    {
        path: "/ao",
        page: AoPage,
        isShowHeader: true
    },

    {
        path: "/quan",
        page: QuanPage,
        isShowHeader: true
    },

]