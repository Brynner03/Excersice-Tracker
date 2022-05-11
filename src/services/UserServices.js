import Client from "./api";

export const GetUsers = async () => {
    try {
        const res = await Client.get(`/user`)
        return res.data
    } catch (error) {
        throw error
    }
}
export const EditAccount = async (data) => {
    try {
        const res = await Client.put(`/user/edit/${data.id}`,data)
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
}
