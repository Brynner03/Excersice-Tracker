import { UsersWorkout, CreateWorkout, EditWorkout, DeleteWorkout } from '../services/WorkoutServices'
import React, { useEffect, useState } from "react";
import '../styles/Workout.css'
import Navbar from '../components/Navbar'
// import EditWorkoutForm from './EditWorkoutForm';

const Workout = ({user, authenticated, day, handleLogOut}) => {

    const [workouts, setWorkouts] = useState([])
    const [delWork, deleteWork] = useState([false])
    
    const [show, setShow] = useState(false)
    const [edit,setEdit] = useState(false)
    // Edit Workout
    const [name, setName] = useState('')
    const [formValue, setFormValue] = useState({
        name: '',
        reps: '',
        sets: '',
        weight: ''
    })

    const preSubmit = () => {
        const tempWorkout = workouts
        tempWorkout.name = formValue.name
        tempWorkout.reps = formValue.reps 
        tempWorkout.sets = formValue.sets 
        tempWorkout.weight = formValue.weight
        
        handleEditForm()
    }
    
    const handleEditForm = async(workout) => {
   
        const payload = await EditWorkout({...formValue,})
        setWorkouts(formValue)
        console.log('This is the payload' + payload)
    }

    
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
        deleteWork(delWork)
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
        <div className='container'>
          {/* Add Workout Form */}
          <div className='form'>
              <button className='newWorkout' onClick={() => setShow(!show)}>Add new workout</button>
        {
            show?
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
          </form>:null
            }
            </div>
              {/* End of Form  */}
              
          {/* Workouts  */}
            <div className='container'>
                <div className="profile">
                    <div className='userWorkouts'>
                        {workouts.slice('').reverse().map((workout) => (
                            
                            <div className='workouts' key={workout.id}>
                                <div className='workoutInfo'>
                                <div className="name">Workout: {workout.name} </div>
                                <div className="reps"> Reps: {workout.reps}</div>
                                <div className='sets'> Sets: {workout.sets} </div>
                                <div className="weight"> Weight: {workout.weight}</div>
                                <button onClick={() => delWorkout(workout)} className='deleteWorkout' >Delete workout</button>
                                </div>

                                {/* EDIT  */}
                                <button className='newWorkout' onClick={() => setEdit(!edit)}>Edit Workout</button>
                                {
                                    edit?
                                <form onSubmit={preSubmit} value={formValue}> 
                                <input type="text" value='name' onChange={(e) => setName(e.target.value)}/>
                                <input type='text' value='reps' />
                                <input type='text' value='sets' />
                                <input type='text' value='weights' /> 
                                <input type="submit" value='Submit Change' />
                             </form>: null
                                }
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