import {
    POST_PAGO,
    POST_PDT,
    UPD_USER, GET_PDT,
    GET_NAM,
    GET_CATEGORIES,
    GET_PAGINATE,
    GET_DET,
    GET_BRANDS,
    FILTER_BY_CATEGORY,
    POST_USER,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    SET_QUANTITY,
    GET_ORD,
    VALIDATE_SUCCESS_ORDER,
    CREATE_ORDER_SUCCESS
} from './actionTypes'
import axios from "axios"

// eslint-disable-next-line
export const getProducts = (page, size) => {
    let endpoint = `http://localhost:3001/products`
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

export const getPaginatedProducts = (page, size) => {
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

    return async () => {
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

export function getBrands() {
    return async (dispatch) => {
        let endpoint = `http://localhost:3001/brands`
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
    return async (dispatch) => {
        let endpoint = `http://localhost:3001/products?`;

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

export const createUser = (name, email, adress_st, adress_num, department, zip) => {
    return async (dispatch) => {
        try {
            
            const requestData = { name, email,  adress_st, adress_num, department, zip };
            const response = await axios.post('http://localhost:3001/users', requestData);


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
export const updateUser = (id, country, adress_st,  adress_num, department, zip) => {
  return async (dispatch) => {
    try {
      console.log('action update user')

      const parsedApartment = Number(department);
      const parsedAdressNum = Number(adress_num);
      const parsedZip= Number(zip);
        
      const requestData = { id, country, adress_st,  adress_num: parsedAdressNum, department: parsedApartment, zip: parsedZip };


            const response = await axios.put('http://localhost:3001/users', requestData);


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
            const response = await axios.post('http://localhost:3001/mercadopago/create-order', payload)
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

export const getOrders = ()=>{
        return async (dispatch)=>{
                try {
                    const response = await axios('http://localhost:3001/orders')
                    const data = response.data
                    return dispatch({
                        type: GET_ORD,
                        payload: data
                    })
                } catch (error) {
                    dispatch({
                        type: 'GET_ORDER_FAILURE',
                        payload: error.message
                    });   }
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
            const response = await axios.post(`http://localhost:3001/orders/${payload.userId}`, payload.productsIds)
            return dispatch({
                type: CREATE_ORDER_SUCCESS,
            })
        } catch (error) {
            console.log(error);
        }
    }
}
