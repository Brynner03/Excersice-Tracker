import Client from './api'

export const GetWeeks = async () => {
    try {
        const res = await Client.get('/week')
        return res.data
    } catch (error) {
        throw error
    }
}

export const EditWeek = async (data) => {
    try {
        const res = await Client.put(`/week/edit/${data.id}`, data)
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const CreateWeek = async (data) => {
    try {
        const res = await Client.post('/week/create', data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const DeleteWeek = async (data) => {
    try {
        const res = await Client.delete(`/week/${data.id}`)
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const UsersWeek = async (data) => {
    try {
        if(isNaN(data)) {
            data = 1
        }

        const res = await Client.get(`/week/user/${data}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetWeeksById = async (data) => {
    try {
        const res = await Client.put(`/:id`)
        return res.data
    } catch (error) {
        throw error
    }
}