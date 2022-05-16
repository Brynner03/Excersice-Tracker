import {CreateDay, UsersDay, EditDay, DeleteDay} from '../services/DayServices'
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Workout from './Workout';
import '../styles/Day.css'

const Day = ({user, authenticated}) => {

    let navigate = useNavigate()

    const [days, setDays] = useState([])
    const [editDay, editDays] = useState([false, 1])
    const [editName, editNames] = useState([])
    
    // Add Day
    const [formVal, setForm] = useState({
        name:""
    })

    const handleChange = async(e)=> {
        setForm({...formVal, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await CreateDay({...formVal, user_id: user.id})
        console.log(payload)
    }
    //Delete Days
    const delDay = async (day) => {
        const sendload = {
            ...day,
        }
        console.log(sendload)
        const payload = await DeleteDay(sendload)
        console.log(payload)
        console.log('Deleted day')
    }
    // Update Days

    const updateDay = (day) => {
        editDay([!editDay[0], day.id])
        editNames(day.name)
    }

    //Send it
    const sendIt = async (day) => {
        const sendload = {
            ...day,
            name: editName
        }
        console.log(sendload)
        const payload = await EditDay(sendload)
        console.log(payload)
    }

    useEffect(() => {
        const handleDay = async () => {

            const data = await UsersDay(user.id)
            setDays(data)
        }
        handleDay()
    }, [])


    return user && authenticated && days ? (
        <div className='container'>
            <div className='test'>{days.slice('').reverse().map((day) => (
                <div className='D'>
                    <button className='delete' onClick={() => delDay(day)}  >Delete day</button>
                <div className='day-name' key={day.id}>{day.name}</div>
                <div className='workouts'>
                <Workout day={day} user={user} authenticated={authenticated} />
                </div>
                </div>
            ))}</div>
        </div>
    ): (
        <div>
            <div>Oops</div>
        </div>
    )

}

export default Day