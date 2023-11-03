import {
    POST_PAGO,
    POST_PDT,
    UPD_USER, GET_PDT,
    GET_NAM,
    GET_CATEGORIES,
    GET_PAGINATE,
    GET_DET,
    GET_BRANDS,
    GET_REVIEWS,
    POST_REV,
    FILTER_BY_CATEGORY,
    POST_USER,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    SET_QUANTITY,
    GET_ORD,
    SELL,
    VALIDATE_SUCCESS_ORDER,
    CREATE_ORDER_SUCCESS,
    LOGOUT,
    GET_USER
} from './actionTypes'
import axios from "axios"
let URL = 'https://e-commerce-fullstackapp-production.up.railway.app/'
// eslint-disable-next-line
export const getProducts = (page, size) => {
    let endpoint = `${URL}${products}`
    return async (dispatch) => {
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
    return async (dispatch) => {
        let endpoint = `${URL}products/?name=${name}`
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

export const getPaginatedProducts = (page, size) => {
    return async (dispatch) => {
        try {
            const paginate = await axios.get(`${URL}products?page=${page}&size=${size}`)
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

    return async () => {
        try {
            const response = await axios.post(`${URL}products`, payload)
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
            const ctgri = await axios.get(`${URL}Categories`)
            const catgoData = ctgri.data
            dispatch({
                type: GET_CATEGORIES,
                payload: catgoData
            })
        } catch (error) {
            console.log(error)

        }
    }
}

export const getDetail = (id) => {
    return async (dispatch) => {
        const endpoint = `${URL}products/${id}`
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

export function getBrands() {
    return async (dispatch) => {
        let endpoint = `${URL}brands`
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

export function getReviews(id){
    return async (dispatch) => {
        let endpoint = `${URL}reviews/${id}`;

        try {
            const response = await axios(endpoint)
            let data = response.data
            dispatch({
                type: GET_REVIEWS,
                payload: data
            })
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
export const postReview = (userId, orderId, productId, description, valoration) =>{
    return async (dispatch)=>{
        let endpoint = `${URL}reviews/${orderId}?userId=${userId}&productId=${productId}`;
        let postData = {
            valoration, description
        }
        try {
            console.log(postData)
            let response = await axios.post(endpoint, postData)
            let data = response.data.newValoration;
            dispatch({
                    type: POST_REV,
                    payload: data
                })

        } catch (error) {
            console.log(error.message)
        }
    }
}

export function filterByGenres(filters) {
    return async (dispatch) => {
        let endpoint = `${URL}products?`;

        if (filters.category > 0) endpoint += `categoryFilter=${filters.category}&`;

        if (filters.brand.length > 0) endpoint += `brandFilter=${filters.brand}&`;

        if (filters.valoration.length > 0) endpoint += `orderBy=${filters.valoration}&direction=asc&`;

        if (filters.price.length > 0) endpoint += `orderBy=price&direction=${filters.price}&`;

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

export const createUser = (name, email, address_st, address_num, department, zip) => {
    return async (dispatch) => {
        try {
            
            const requestData = { name, email,  address_st, address_num, department, zip };
            const response = await axios.post(`${URL}users`, requestData);


            dispatch({
                type: POST_USER,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: 'CREATE_USER_FAILURE',
                payload: error.message
            });
        }
    };
};
export const updateUser = (id, country, address_st,  address_num, department, zip) => {
  return async (dispatch) => {
    try {
      console.log('action update user')

      const parsedApartment = Number(department);
      const parsedAddressNum = Number(address_num);
      const parsedZip= Number(zip);
        
      const requestData = { id, country, address_st,  address_num: parsedAddressNum, department: parsedApartment, zip: parsedZip };


            const response = await axios.put(`${URL}users`, requestData);


            dispatch({
                type: UPD_USER,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: 'UPDATE_USER_FAILURE',
                payload: error.message
            });
        }
    };
};



export const createOrder = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${URL}mercadopago/create-order`, payload)
            // window.open(response.data);
            window.location.href = response.data;
            return dispatch({
                type: POST_PAGO
            })

        } catch (error) {
            console.log(error);
        }
    }
}

export const getOrders = (userId)=>{
        return async (dispatch)=>{
                try {
                    if(userId){
                        const response = await axios(`${URL}orders?userId=${userId}`)
    
                        const data = response.data
                        return dispatch({
                            type: GET_ORD,
                            payload: data
                        })
                    }
                    else{
                        const response = await axios(`${URL}orders`)
                        
                        const data = response.data

                        return dispatch({
                            type: GET_ORD,
                            payload: data
                        })
                    }
                    
                    
                } catch (error) {
                    console.log(error.message)
                    dispatch({
                        type: 'GET_ORDER_FAILURE',
                        payload: error.message
                    });   }
        }
}

export const sellOrder = (orderId)=>{
    return async (dispatch) =>{
        try {
            const response = axios.put(`${URL}orders/${orderId}`) 
            const data = response.data;
            dispatch({
                type: SELL,
                payload: data
            })
            
        } catch (error) {
            dispatch({
                type: 'SELL_ORDER_FAILURE',
                payload: error.message
            })     }
        
    }
}



export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const removeFromCart = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const setQuantity = (payload) => {
    return {
        type: SET_QUANTITY,
        payload
    }
}

export const validateSuccessOrder = (payload) => {
    return {
        type: VALIDATE_SUCCESS_ORDER,
        payload
    }
}

export const createOrderSuccess = (payload) => {
    return async (dispatch) => {
        
        try {
            // console.log(payload);
            const response = await axios.post(`${URL}orders/${payload.userId}`, payload.productsIds)
            return dispatch({
                type: CREATE_ORDER_SUCCESS,
                response
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export const logoutUser = () => {
    return {
        type: LOGOUT
    }
}

// export const getUser = () => {
