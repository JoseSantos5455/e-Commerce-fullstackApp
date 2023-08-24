import { POST_PDT, GET_PDT,GET_DET } from "../actions/actionTypes";

const initialState = {
      base: [],
      products: [],
      detail:[]
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PDT:
        return{
          ...state,
            products: action.payload

        }

      case GET_DET:
        return{
          ...state,
          detail: action.payload
        }
      case POST_PDT:
        return {
          ...state
        }
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  