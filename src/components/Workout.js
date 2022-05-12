import { UsersWorkout, CreateWorkout, EditWorkout, DeleteWorkout } from '../services/WorkoutServices'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import '../styles/Workout.css'

const Workout = ({user, authenticated}) => {

    
    let navigate = useNavigate()
    
    const [workouts, setWorkouts] = useState([])
    const [editReps, setReps] = useState('')
    const [editSets, setSets] = useState('')
    const [editWeights, setWeights] = useState('')
    const [editName, setName] = useState('')
    
    const delWorkout = async (workout) => {
        const sendload = {
            ...workout,
        }
        console.log(sendload)
        const payload = await DeleteWorkout(sendload)
        console.log(payload)
        console.log('Deleted workout')
    }
    
    useEffect(() => {
        const handleWorkout = async () => {
            const data = await UsersWorkout(user.id)
            setWorkouts(data)
        }
        handleWorkout()
    },[] )

    return user && authenticated && workouts ? (
        <div>
            <div className='container'>
                <div className="profile">
                    <div className='userWorkouts'>
                        <button>Track new workout</button>
                        {workouts.slice('').reverse().map((workout) => (
                            
                            <div className='workouts' key={workout.id}>
                                <div className="name">Workout Name: {workout.name} </div>
                                <div className="reps"> Reps: {workout.reps}</div>
                                <div className='sets'> Sets:{workout.sets} </div>
                                <div className="weight"> Weight: {workout.weight}</div>
                                <button onClick={() => delWorkout(workout)} >Delete workout</button>
                                    </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    ) : (
            <div>
                Test
            </div>
    )
}

export default Workout