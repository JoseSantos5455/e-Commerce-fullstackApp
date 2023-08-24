import {POST_PDT, GET_PDT} from './actionTypes'
import axios from "axios"


export const getProducts = (page, size)=>{
    return async (dispatch) =>{
        let endpoint =`http://localhost:3001/products`
        try {
            const response = await axios(endpoint)
            let data = response.data
            dispatch({
                type: GET_PDT,
                payload: data

            })
        } catch (error) {
            console.log(error)
        }        
    }
}

export const getNameProducts = (name) => {
    return async () => {
        try {
            const nameInfo = await axios.get('' + name)
        } catch (error) {
            console.log(error);
        }
    }
}
// export const createProducts = (payload) => {
//     return async () =>{
//         try {
//             const response = await axios.post('', payload)
//             return {
//                 type: POST_PDT,
//                 response
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }
