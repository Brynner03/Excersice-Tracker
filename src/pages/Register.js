import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateUser } from '../services/auth'

const Register = () => {

    const [form, setForm] = useState({
        userName: '',
        password: '',
        passwordCheck: '',
        day_id: '',
        week_id: '',
        workout_id: ''
    })
    let navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Creating User..")
        await CreateUser({
            userName: form.userName,
            passwordtemp: form.password
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
                        name='username'
                        type='text'
                        placeholder='username'
                        value={form.userName}
                        required
                        />
                    </div>
                    <div className="input-wrap-register">
                        <input
                        onChange={handleChange}
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={form.password}
                        required
                        />
                    </div>
                    <div className="input-wrap-register">
                        <input
                        onChange={handleChange}
                        auto-autoComplete='current-password'
                        name='passwordCheck'
                        type='password'
                        placeholder='Confirm Password'
                        value={form.passwordCheck}
                        required
                        />
                    </div>

                <button
                disabled={
                    !form.userName ||
                    (!form.password &&
                        form.passwordCheck === form.password)
                }
                >Register</button>
                </form>
            </div>
        </div>
    )

}

export default Register