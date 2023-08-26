const initialState = {
    products: [],
}

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_NAME_PRODUCT':
            return {
                ...state,
                videogames: action.payload
            }


        default:
            return state;
    }

}

export default rootReducer;