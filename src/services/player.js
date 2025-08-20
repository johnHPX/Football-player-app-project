import api from "./api"

export async function searchPlayers(name){
    const response = await api.get(`?p=${encodeURIComponent(name)}`)
    return response.data
}