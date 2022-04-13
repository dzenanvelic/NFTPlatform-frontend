import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../UIelements/Button'
import Input from '../UIelements/Input'
import './login.css'
function Login() {
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label >Email</label>
                <Input element="input" type="text" placeholder="Enter your email" />
                <label >Password</label>
                <Input element="input" type="password" placeholder="Enter your password" />
                <Button>Login</Button>

            </form>
            <Link to="/blogregister">
                <Button buttonClass='loginRegisterButton'>Register</Button>
            </Link>

        </div>
    )
}

export default Login