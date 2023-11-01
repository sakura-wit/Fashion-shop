import React from "react";


export function ForgotPage(){
    return(
        <div className="forgotpage-contain">
           
        <div class="wrapper-fg">
            <form action="">
                <h1>Forgot Password</h1>
                <div class="input-box-fg">
                    <input id="email" type="email" placeholder="Email"/>
                    <i class="bx bx-envelope"></i>
                </div>

                <button type="submit" class="btn-fg">Continue</button>

                <div class="register-link-fg">
                   
                    <p>Do not have an account?<a>Register</a></p> 
                </div>
            </form>
        </div>
        </div>
    )
}

