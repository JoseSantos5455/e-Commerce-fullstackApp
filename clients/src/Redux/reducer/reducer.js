import { POST_PRODUCTS } from "../actions/actions";

const initialState = {
  
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_PRODUCTS:
        return {
          ...state
        }
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  