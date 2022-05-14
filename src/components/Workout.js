import { UsersWorkout, CreateWorkout, EditWorkout, DeleteWorkout } from '../services/WorkoutServices'
import React, { useEffect, useState } from "react";
import '../styles/Workout.css'
import EditWorkoutForm from './EditWorkoutForm';

const Workout = ({user, authenticated, day}) => {

    const [workouts, setWorkouts] = useState([])
    const [delWork, deleteWork] = useState([])
    // const [editReps, setReps] = useState('')
    // const [editSets, setSets] = useState('')
    // const [editWeights, setWeights] = useState('')
    // const [editName, setName] = useState('')

    
    // Add A Workout
    const [formVal, setForm] = useState({
        name:"",
        sets:"",
        reps: '',
        weight: ''
    })
    
    const handleChange = async(e)=> {
        setForm({...formVal, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await CreateWorkout({...formVal, user_id: user.id, day_id: day.id})
        console.log(payload)
    }


    // Delete Workout
    const delWorkout = async (workout) => {
        const sendload = {
            ...workout,
        }
        console.log(sendload)
        const payload = await DeleteWorkout(sendload)
        console.log(payload)
        deleteWork(payload)
        console.log('Deleted workout')
    }
    // Showing users workouts
    useEffect(() => {
        const handleWorkout = async () => {
            const data = await UsersWorkout(user.id, day.id)
            setWorkouts(data)
        }
        handleWorkout()
    },[] )



    return user && authenticated && workouts ? (
        <div>
          <button className='newWorkout'>Add new workout</button>
          {/* Form */}
          <form onSubmit={handleSubmit}>
              <div className='input-wrap'>
                  <input 
                  onChange={handleChange}
                  name="name"
                  type='text'
                  placeholder='name'
                  value={formVal.name}
                  required />
              </div>
              <div className='input-wrap'>
              <input onChange={handleChange}
              name='sets'
              type='text'
              placeholder='sets'
              value={formVal.sets}
              required />
              </div>
              <div className='input-wrap'>
              <input onChange={handleChange}
              name='reps'
              type='text'
              placeholder='reps'
              value={formVal.reps}
              required />
              </div>
              <div className='input-wrap'>
              <input onChange={handleChange}
              name='weight'
              type='text'
              placeholder='weight'
              value={formVal.weight}
              required />
              </div>
              <button>Submit</button>
          </form>
          {/* End of Form  */}

          {/* Workouts  */}
            <div className='container'>
                <div className="profile">
                    <div className='userWorkouts'>
                        {workouts.slice('').reverse().map((workout) => (
                            
                            <div className='workouts' key={workout.id}>
                                <div className="name">Workout: {workout.name} </div>
                                <div className="reps"> Reps: {workout.reps}</div>
                                <div className='sets'> Sets: {workout.sets} </div>
                                <div className="weight"> Weight: {workout.weight}</div>
                                <div className='dayId'>DayId: {workout.day_id}</div>
                                <button onClick={() => delWorkout(workout)} >Delete workout</button>
                                <EditWorkoutForm workout={workout} setWorkouts={setWorkouts} />
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