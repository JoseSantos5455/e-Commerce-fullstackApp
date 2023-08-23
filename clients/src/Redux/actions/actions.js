import axios from "axios"
export const POST_PRODUCTS = "POST_PRODUCTS"



export const createProducts = (payload) => {
    return async () =>{
        try {
            const response = await axios.post('', payload)
            return {
                type: POST_PRODUCTS,
                response
            }
        } catch (error) {
            console.log(error);
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