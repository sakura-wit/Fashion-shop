import React from "react";
import { useState } from "react";

import * as UserService from "../service/UserService";
import { InputSign } from "../components/Field/InputSign";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { userAction } from "../redux/Slice/UserSlice";
import { updateProductCur } from "../redux/Slice/ProductSlice";

export function LoginPage() {
  // const dataProductCurrent = useSelector((state) => state.product.productCurrent)

  const { control, handleSubmit, formState } = useForm({});

  const [dataResponse, setDataResponse] = useState({
    status: "none",
  });

  const navigate = useNavigate();

  const fields = [
    { name: "email" },
    { name: "password" }
  ];

  const dispash = useDispatch();

  const onSubmit = async (data) => {
    const res = await UserService.getUserApi.signinUser(data);
    console.log("res", res);
    const token = jwtDecode(res.access_token);
    // console.log(token);

    const dataUser = await UserService.getUserApi.getDetailUser(
      token.payload.id, res.access_token
    );
    // console.log('dataUser', dataUser.data);
    dispash(userAction.update(dataUser.data));

    if (dataUser.data.cart !== undefined) {
      dispash(updateProductCur([...dataUser.data.cart]));
    }

    setDataResponse(res);
    if (res.status === "OK") {
      // console.log("okeeeee");
      localStorage.setItem('access_token', res?.access_token)
      // dataUser.data.isAdmin ? navigate("/admin") : navigate("/");
      return navigate("/");
    }
  };

  useEffect(() => {
    console.log("dataResponse", dataResponse.status);
  }, [dataResponse]);

  window.scrollTo({
    top: 0,
  })

  return (
    <div style={{ marginTop: 160 }} className="loginpage-contain">
      <div className="wrapper">
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <h1>Login</h1>
          <div className="input-box">
            {/* <input type="text" placeholder="Username" required /> */}
            <InputSign
              control={control}
              formState={formState}
              fields={fields[0]}
              placeholder={fields[0].name}
            />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <InputSign
              control={control}
              formState={formState}
              fields={fields[1]}
              placeholder={fields[1].name}
            />
            {/* <input type="password" placeholder="Password" required /> */}
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember account
            </label>
            <a>Forgot password</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="or">
            <h5>---OR---</h5>
          </div>
          <div className="btnor">
            <button className="btnfb">Facebook</button>
            <button className="btngg">Google</button>
          </div>
          <div className="register-link">
            <p>
              Do not have an account?<a href="/sign-up">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
