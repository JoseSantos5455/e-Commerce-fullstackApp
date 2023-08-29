import {POST_PDT, GET_PDT, GET_NAME_PRODUCTS, GET_CATEGORIS, GET_PAGINATE, GET_DET, FILTER_BY_CATEGORY, ORDER_BY_PRICE, ORDER_BY_VALORATION} from './actionTypes'
import axios from "axios"

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios(endpoint)
      let data = response.data
      console.log('despacha')

      dispatch({
        type: GET_PDT,
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getNameProducts = (name) => {
  return async (dispatch) => {
    let endpoint = `http://localhost:3001/products/?name=${name}`
    try {
      const response = await axios.get(endpoint)
      let data = response.data

      dispatch({
        type: GET_NAM,
        payload: data,
      })
      console.log(name)
    
    } catch (error) {
      console.log(error)
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

export const getDetail = (id)=>{
    return async (dispatch)=>{
        const endpoint = `http://localhost:3001/products/${id}`
         try {
            let response = await axios(endpoint)
            let data = response.data
      
        return  dispatch({
            type: GET_DET,
            payload: data
        })
       } catch (error) {
        console.log(error.message)
       }
    }
}


export function filterByGenres(payload) {
    return {
        type: FILTER_BY_CATEGORY,
        payload
    }
}

export function orderByValoration(payload) {
    return {
        type: ORDER_BY_VALORATION,
        payload
    }
}

export function orderByPrice(payload) {
    return {
        type: ORDER_BY_PRICE,
        payload
    }
}
