import {
        POST_PAGO,
        POST_PDT,
        GET_PDT,
        GET_NAM, 
        GET_CATEGORIES,
        GET_PAGINATE,
        GET_DET, 
        GET_BRANDS,
        FILTER_BY_CATEGORY
    } from './actionTypes'
import axios from "axios"

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios("http://localhost:3001/products")
      let data = response.data

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
                type: GET_CATEGORIES,
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

            return dispatch({
                type: GET_DET,
                payload: data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}


export function getBrands(){
  return async (dispatch) =>{
    let endpoint =`http://localhost:3001/brands`
    try {
        const response = await axios(endpoint)
        let data = response.data
        dispatch({
            type: GET_BRANDS,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }        
  }
}

export function filterByGenres(filters) {
    return async (dispatch) =>{
      let endpoint = `http://localhost:3001/products?`;

      if(filters.category > 0) endpoint +=`categoryFilter=${filters.category}&`;

      if(filters.brand.length > 0) endpoint += `brandFilter=${filters.brand}&`;

      if(filters.valoration.length > 0) endpoint += `orderBy=${filters.valoration}&direction=asc&`;

      if(filters.price.length > 0) endpoint += `orderBy=price&direction=${filters.price}&`;

      if (endpoint.endsWith('&')) {
        endpoint = endpoint.slice(0, -1);
      }

      try {
          const response = await axios(endpoint)
          let data = response.data
          dispatch({
              type: FILTER_BY_CATEGORY,
              payload: data
          })
      } catch (error) {
          console.log(error)
      }        
  }
}

export const createOrder = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/mercadopago/create-order', payload)
            window.open(response.data,);
            return dispatch({
                type: POST_PAGO
            })

        } catch (error) {
            console.log(error);
        }
    }
}
