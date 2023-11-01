import React from "react";

// import { SlideShowSin } from "../components/common/SlideShowSin";
// import { SlideShowMul } from "../components/common/SlideShowMul";
// import { ItemProduct } from "../components/common/ItemProduct";
// import { News } from "../components/common/News";

export function LoginPage(){
    return(
        
        <div className="loginpage-contain">
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <i className='bx bxs-user'></i>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <i className="bx bxs-lock-alt"></i>
                </div>
                <div className="remember-forget">
                    <label><input type="checkbox"/>Remember account</label>
                    <a>Forgot password</a>
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="or">
                    <h5>---OR---</h5>
                </div>
                <div className="btnor">
                        <button className="btnfb">Facebook</button>
                        <button className="btngg">Google</button>
                </div>
                <div className="register-link">
                    <p>Do not have an account?<a>Register</a></p> 
                </div>
            </form>
        </div>
        </div>
    )
}
