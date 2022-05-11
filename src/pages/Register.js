import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateUser } from '../services/auth'

const Register = () => {

    const [formVal, setForm] = useState({
        userName: '',
        password: '',
        passwordCheck: '',
        day_id: '',
        week_id: '',
        workout_id: ''
    })
    let navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...formVal, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Creating User..")
        await CreateUser({
            userName: formVal.userName,
            passwordtemp: formVal.password
        })
        setForm({
            userName: '',
            password: '',
            confirmPassword: '',
            day_id: '',
            week_id: '',
            workout_id: ''
        })
        navigate('/login')
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>

                    <div className="input-wrap-register">
                        <input
                        autoComplete='username'
                        onChange={handleChange}
                        name='userName'
                        type='text'
                        placeholder='username'
                        value={formVal.userName}
                        required
                        />
                    </div>
                    <div className="input-wrap-register">
                        <input
                        onChange={handleChange}
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={formVal.password}
                        required
                        />
                    </div>
                    <div className="input-wrap-register">
                        <input
                        onChange={handleChange}
                        autoComplete='current-password'
                        name='passwordCheck'
                        type='password'
                        placeholder='Confirm Password'
                        value={formVal.passwordCheck}
                        required
                        />
                    </div>

                <button
                disabled={
                    !formVal.userName ||
                    (!formVal.password &&
                        formVal.passwordCheck === formVal.password)
                }
                >Register</button>
                </form>
            </div>
        </div>
    )

}

export default Register