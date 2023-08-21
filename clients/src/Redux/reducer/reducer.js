const initialState = {
    
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SOME_ACTION":
        return state;
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  