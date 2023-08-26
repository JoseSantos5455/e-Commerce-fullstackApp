import { GET_PDT, GET_CATEGORIES, FILTER_BY_CATEGORY, ORDER_BY_PRICE, ORDER_BY_VALORATION} from './actionTypes'
import { GET_PDT, GET_DET} from './actionTypes'
import axios from "axios"

// eslint-disable-next-line
export const getProducts = (page, size) => {
  return async (dispatch) => {
    let endpoint = `http://localhost:3001/products`
    try {
      const response = await axios(endpoint)
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
  return async () => {
    try {
      await axios.get('' + name)
    } catch (error) {
      console.log(error)
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


    return async (dispatch) =>{
        let endpoint =`http://localhost:3001/categories`
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
