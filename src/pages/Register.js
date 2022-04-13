import React from 'react'
import './register.css'
import Button from '../UIelements/Button'
import Input from '../UIelements/Input'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label >Username</label>
                <Input element="input" type="text" placeholder="Enter your username" />
                <label >Email</label>
                <Input element="input" type="text" placeholder="Enter your email" />
                <label >Password</label>
                <Input element="input" type="password" placeholder="Enter your password" />
                <Button>Register</Button>

            </form>
            <Link to="/blogsign">
                <Button buttonClass='registerButton'>Login</Button>
            </Link>

        </div>
    )
}

export default Register