import { POST_PDT, GET_PDT } from "../actions/actionTypes";

const initialState = {
      base: [],
      products: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PDT:
        return{
          

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
  