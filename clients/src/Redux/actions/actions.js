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
