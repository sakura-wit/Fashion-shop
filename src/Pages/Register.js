import React from "react";

export function RegisterPage(){
    return(
        
        <div className="registerpage-contain">


        <div className="a1">
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Email" required/>
                    <i className='bx bx-envelope'></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <i className="bx bxs-lock-alt"></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Enter your Password" required/>
                    <i className="bx bxs-lock-alt"></i>
                </div>
                <button type="submit" className="btn">Register</button>

                <div className="or">
                    <h5>---OR---</h5>
                </div>
                <div className="btnor">
                        <button className="btnfb">Facebook</button>
                        <button className="btngg">Google</button>
                </div>
                <div className="content">
                        Do you already have an account?
                        <a>Login</a>
                </div>
            </form>
        </div>
        </div>
    )
}

