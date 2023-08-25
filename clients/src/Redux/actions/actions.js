import {POST_PDT, GET_PDT, GET_NAME_PRODUCTS, GET_CATEGORIS, GET_PAGINATE} from './actionTypes'
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
            const nameInfo = await axios.get(`http://localhost:3001/products?name=${name}`)
            console.log("Datos recibidos:", nameInfo);
            dispatch({
                type: GET_NAME_PRODUCTS,
                payload: nameData
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getPaginatedProducts = (page, size) =>{
    return async (dispatch) => {
        try {
            const paginate = await axios.get(`http://localhost:3001/products?page=${page}&size=${size}`)
            const result = paginate.data
            dispatch({
                type: GET_PAGINATE,
                payload: result
            })
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

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const ctgri = await axios.get(`http://localhost:3001/Categories`)
            const catgoData = ctgri.data
            dispatch({
                type: GET_CATEGORIS,
                payload: catgoData
            })
        } catch (error) {
            
        }
    }
}
