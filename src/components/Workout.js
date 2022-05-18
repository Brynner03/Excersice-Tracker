import { UsersWorkout, CreateWorkout, EditWorkout, DeleteWorkout } from '../services/WorkoutServices'
import React, { useEffect, useState } from "react";
import '../styles/Workout.css'


const Workout = ({user, authenticated, day, handleLogOut}) => {

    const [workouts, setWorkouts] = useState([])
    const [delWork, deleteWork] = useState([false])
    
    const [show, setShow] = useState(false)
    const [edit,setEdit] = useState(false)



    // Edit Workout
    const [name, setName] = useState('')
    const [formValue, setFormValue] = useState({
        name: '',
        sets: 0,
        reps: 0,
        weight: 0
    })

    const preSubmit = (workout) => {
        const tempWorkout = workouts
        tempWorkout.id = workout.id
        tempWorkout.name = formValue.name
        tempWorkout.reps = formValue.reps 
        tempWorkout.sets = formValue.sets 
        tempWorkout.weight = formValue.weight
        
        handleEditForm(tempWorkout)
    }
    
    const handleEditForm = async(workout) => {
        console.log(formValue)
        const payload = await EditWorkout({...formValue, id: workout.id})
        setWorkouts(formValue)
        console.log('This is the payload' + payload)
    }

    const handleChangeEdit = (e)=> {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    
    // Add A Workout
    const [formVal, setForm] = useState({
        name:"",
        sets: 0,
        reps: 0,
        weight: 0
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
                                    // <EditWorkoutForm workouts={workouts} setWorkouts={setWorkouts} />
                                <form onSubmit={() => preSubmit(workout)} value={formValue}> 
                                <input type="text" name='name' placeholder='name' onChange={handleChangeEdit} />
                                <input type='number' name='sets' placeholder='sets' onChange={handleChangeEdit} />
                                <input type='number' name='reps' placeholder='reps' onChange={handleChangeEdit} />
                                <input type='number' name='weight' placeholder='weights' onChange={handleChangeEdit} /> 
                                <input type="submit"  />
                             </form>
                             : null
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