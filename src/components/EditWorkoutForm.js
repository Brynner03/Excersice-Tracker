import React, {useState} from "react";
import {EditWorkout} from '../services/WorkoutServices'

const EditWorkoutForm = ({setWorkouts}, workout) => {

    const [name, setName] = useState('')
    const [formVal, setForm] = useState({
        name: '',
        reps: '',
        sets: '',
        weight: ''
    })

    const preSubmit = () => {
        const tempWorkout = workout
        tempWorkout.name = formVal.name
        tempWorkout.reps = formVal.reps 
        tempWorkout.sets = formVal.sets 
        tempWorkout.weight = formVal.weight
    }

    // const [reps, setReps] = useState('')
    // const [sets, setSets] = useState('')
    // const [weight, setWeight] = useState('')

    const handleSubmit = async({workout}, e) => {
        e.preventDefault()
        const payload = await EditWorkout({...formVal})
        setWorkouts(workout)
        console.log(payload)
    }

    return (
        <form onSubmit={handleSubmit} value={formVal}> 
            <label>Edit Workout</label>
            <input type="text" value='name' onChange={(e) => setName(e.target.value)}/>
            {/* <input type='text' value='reps' />
            <input type='text' value='sets' />
            <input type='text' value='weights' /> */}
            <input type="submit" value='Submit Change' />
        </form>
    )
}

export default EditWorkoutForm