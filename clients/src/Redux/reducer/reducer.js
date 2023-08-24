import { POST_PDT, GET_PDT, GET_NAME_PRODUCTS } from "../actions/actionTypes";

const initialState = {
      base: [],
      products: []
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
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  