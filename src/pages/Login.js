import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserSignIn } from '../services/auth'

const Login = (props) => {
    let navigate = useNavigate()

    const [formVal, setFormVal] =useState({
        userName: '',
        password: ''
    })
    const handleChange = (e) => {
        setFormVal({ ...formVal, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await UserSignIn(formVal)
        setFormVal({ userName: '', password: ''})
        props.setUser(payload)
        if (payload) {
            props.toggleAuthenticated(true)
        } else {
            props.toggleAuthenticated(false)
        }
        navigate('/')
    }

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            handleSubmit()
        }
    }

    return ( 
        <div onKeyPress={handleKeypress}>
            <div className='input-page'>
                <form onSubmit={handleSubmit}>
                    <div className='input-wrap-register'>
                        <input
                        onChange={handleChange}
                        name='userName'
                        type='text'
                        placeholder='Username'
                        value={formVal.userName}
                        required
                        />
                    </div>
                    <div className='input-wrap-register'>
                        <input
                        onChange={handleChange}
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={formVal.password}
                        onKeyPress = {handleKeypress}
                        required
                        />
                    </div>
                    <button className='sign-in'
                    // disabled={
                    //     !formVal.email ||
                    //     !formVal.password
                    // }
                    >Log In</button>
                </form>
            </div>
        </div>
    )


}

export default Login