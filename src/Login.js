import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e => 
    {
            e.preventDefault();

            auth
                .signInWithEmailAndPassword(email, password)
                .then(auth => 
                {
                    history.push('/')
                })
                .catch(error => alert(error.message))
    }


    const register = e => 
    {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => 
            {
                ///its succesfully created
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })

            .catch(error => alert(error.message))

        //do some fancy firebase register ssss...
    }

    return (
        <div className='login'> 
            <Link to='/'>
                <img 
                    className="login_logo" src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012015/amazon-logo-rgb.png?itok=FZJ5-sKg" alt="" 
                />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange= {e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange= {e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login_signinButton'>Sign in</button>
                </form>

                <p>
                    By signing-in you agree to the Amazon Clone's all terms and conditions. Please see our privacy notice, our cookies notice and our interest based Ads Notice.
                </p>

                <button onClick={register} className='login_registerButton'>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
