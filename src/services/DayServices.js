import Client from './api'

export const GetDays = async() => {
    try {
        const res = await Client.get('/day')
        return res.data
    } catch (error) {
        throw error
    }
}

export const EditDay = async (data) => {
    try {
        const res = await Client.get(`/day/${data.id}`, data)
        return res.data
    } catch (error) {
        throw error
    }
}