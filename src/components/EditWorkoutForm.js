import React, {useState} from "react";
import {EditWorkout} from '../services/WorkoutServices'

const EditWorkoutForm = ({setWorkouts}, workouts, day, user) => {

    const [name, setName] = useState('')
    const [formValue, setFormValue] = useState({
        id: workouts.id,
        name: '',
        reps: '',
        sets: '',
        weight: '', 
    })

    const preSubmit = () => {
        const tempWorkout = workouts
        tempWorkout.name = formValue.name
        tempWorkout.reps = formValue.reps 
        tempWorkout.sets = formValue.sets 
        tempWorkout.weight = formValue.weight
        handleEditForm()

    }

    // const [reps, setReps] = useState('')
    // const [sets, setSets] = useState('')
    // const [weight, setWeight] = useState('')

    const handleEditForm = async({workouts}, e) => {
        e.preventDefault()
        const payload = await EditWorkout({...formValue, })
        setWorkouts(workouts)
        console.log(payload)
    }

    return (
        <form onSubmit={preSubmit} value={formValue}> 
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