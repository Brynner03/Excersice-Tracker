import { UsersWorkout, CreateWorkout, EditWorkout, DeleteWorkout } from '../services/WorkoutServices'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";

const Workout = ({user, authenticated}) => {

    
    let navigate = useNavigate()
    
    const [workouts, setWorkouts] = useState([])
    const [editWorkout, editWorkouts] = useState([false, 1])
    const [editReps, setReps] = useState('')
    const [editSets, setSets] = useState('')
    const [editWeights, setWeights] = useState('')
    const [editName, setName] = useState('')
    
    const navDelete = (workout) => {
        navigate(`../workout/${workout.id}`)
        delWorkout(workout)
    }
    const delWorkout = async (workout) => {
        const sendload = {
            ...workout,
        }
        console.log(sendload)
        const payload = await DeleteWorkout(sendload)
        console.log(payload)
        console.log('Deleted workout')
    }
    const updateWorkout = (workout) => {
        editWorkouts([!editWorkout[0], workout.id])
        setName(workout.name)
        setSets(workout.sets)
        setReps(workout.reps)
        setWeights(workout.weight)
    }
    const handleChange = (e) => {
        setName(e.target.value)
        setSets(e.target.value)
        setReps(e.target.value)
        setWeights(e.target.value)
    }
    const sendit = async (workout) => {
        const sendload = {
            ...workout,
            name: editName,
            sets: editSets,
            reps: editReps,
            weight: editWeights
        };
        console.log(sendload);
        const payload = await EditWorkout(sendload);
        console.log(payload);
    };
    
    useEffect(() => {
        const handleWorkout = async () => {
            const data = await UsersWorkout(user.id)
            setWorkouts(data)
            
        }
        console.log('this is the USERRRRRRR',  user)
        handleWorkout()
    }, )

    return user && authenticated && workouts ? (
        <div>
            <div className='container'>
                <div className="profile">
                    <div className="username"> {user.userName}</div>
                    <div className='userWorkouts'>
                        {workouts.slice('').reverse().map((workout) => (
                            
                            <div className='workouts' key={workout.id}>
                                <div className="reps"> {workout.reps}</div>
                                <div className='sets'> {workout.sets} </div>
                                <div className="weight"> {workout.weight}</div>
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