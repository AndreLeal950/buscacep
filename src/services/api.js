import axios from "axios"

//66085753/json
 

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api