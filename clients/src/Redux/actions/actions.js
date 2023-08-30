import { GET_PDT, GET_DET, GET_NAM, GET_CATEGORIES, FILTER_BY_CATEGORY, ORDER_BY_PRICE, ORDER_BY_VALORATION, POST_PAGO } from './actionTypes'
import axios from "axios"

// eslint-disable-next-line
export const getProducts = (page, size) => {
    let endpoint = `http://localhost:3001/products`
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
export const getDetail = (id) => {
    return async (dispatch) => {
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

export function getCategories() {
    /* return function(dispatch) {
         axios.get("/categories")
             .then(response => {
                 return dispatch({
                     type: GET_CATEGORIES,
                     payload: response.data
                 })
             })
     }*/


    return async (dispatch) => {
        let endpoint = `http://localhost:3001/categories`
        try {
            const response = await axios(endpoint)
            let data = response.data
            dispatch({
                type: GET_CATEGORIES,
                payload: data
            })
        } catch (error) {
            console.log(error)
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

export const createOrder = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/mercadopago/create-order', payload)
            window.open(response.data, '_blank');
            return dispatch({
                type: POST_PAGO
            })

        } catch (error) {
            console.log(error);
        }
    }
}
