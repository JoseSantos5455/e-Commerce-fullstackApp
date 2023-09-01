import { GET_PDT, GET_DET, GET_NAM, GET_CATEGORIES, GET_BRANDS, FILTER_BY_CATEGORY, POST_USER} from './actionTypes'
import axios from "axios"

// eslint-disable-next-line
export const getProducts =  (page, size) => {
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

      /*
      if (page) endpoint += `page=${page}&`;
      if (size) endpoint += `size=${size}&`;
*/
      // Elimina el último '&' si existe
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

export const createUser = (name, email) => {
  return async (dispatch) => {
    try {
      const requestData = { name, email };

      const response = await axios.post('http://localhost:3001/users', requestData);

    
      dispatch({ type: POST_USER,
                   payload: response.data });
    } catch (error) {
      dispatch({ type: 'CREATE_USER_FAILURE',
                 payload: error.message });
    }
  };
};

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
