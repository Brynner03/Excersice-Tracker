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
        const res = await Client.get(`/day/edit/${data.id}`, data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const DeleteDay = async (data) => {
    try {
        const res = await Client.delete(`/day/${data.id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const CreateDay = async (data) => {
    try {
        const res = await Client.post('/day/', data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const UsersDay = async (data) => {
    try {
      if(isNaN(data)){
        data = 1
      }
  
  
      const res = await Client.get(`/day/user/${data}`)
      return res.data
    } catch (error) {
      throw error
    }
  }