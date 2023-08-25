import { POST_PDT, GET_PDT, GET_NAME_PRODUCTS, GET_CATEGORIS, GET_PAGINATE } from "../actions/actionTypes";

const initialState = {
      base: [],
      products: [],
      ctgri: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PDT:
        return{
          ...state,
            products: action.payload

        }
      case POST_PDT:
        return {
          ...state
        }
      case GET_NAME_PRODUCTS: 
        return {
            ...state,
            products: action.payload
        }
      case GET_CATEGORIS:
        return {
          ...state,
          ctgri: action.payload
        }
      case GET_PAGINATE:
          return {
            ...state,
            products: action.payload
          }
      default:
        return state;
    }
  };
  
  export default rootReducer;
  