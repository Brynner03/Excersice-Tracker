import Client from "./api";

export const GetWorkouts = async () => {
    try {
        const res = await Client.get('/workout')
        return res.data
    } catch (error) {
        throw error
    }
}

export const EditWorkout = async (data) => {
    try {
        const res = await Client.put(`/workout/edit/${data.id}`, data)
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const DeleteWorkout = async (data) => {
    try {
        const res = await Client.delete(`/workout/${data.id}`)
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const CreateWorkout = async (data) => {
    try {
        const res = await Client.post('/workout/create', data)
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const UsersWorkout = async (data, day) => {
    try {
        const res = await Client.get(`/workout/user/${data}`)
        console.log(res.data)
        return res.data
    }  catch (error) {
        throw error
    }
}