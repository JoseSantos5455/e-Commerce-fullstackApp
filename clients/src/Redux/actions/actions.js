import {POST_PDT, GET_PDT, GET_NAME_PRODUCTS} from './actionTypes'
import axios from "axios"


export const getProducts = ()=>{
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
    return async (dispatch) => {
        try {
            const nameInfo = await axios.get('' + name)
        } catch (error) {
            console.log(error);
        }
    }
}

export const createProducts = (payload) => {
    return async () =>{
        try {
        const response = await axios.post('http://localhost:3001/products', payload)
        return {
            type: POST_PDT,
            response
        }  
        } catch (error) {
            console.log(error);        
        }
    }
}    
