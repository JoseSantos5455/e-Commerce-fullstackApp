import {
  UPD_USER,
  POST_PDT,
  GET_PDT,
  GET_NAM,
  GET_DET,
  GET_CATEGORIES,
  GET_BRANDS,
  FILTER_BY_CATEGORY,
  GET_PAGINATE,
  POST_PAGO,
  POST_USER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  SET_QUANTITY
} from '../actions/actionTypes'

const initialState = {
  base: [],
  products: [],
  allProducts: [],
  categories: [],
  brands: [],
  detail: [],
  product_name: [],
  filters: [],
  user: [],
  cart: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PDT:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      }

    case GET_DET:
      return {
        ...state,
        detail: action.payload,
      }
    case GET_NAM:
      return {
        ...state,
        product_name: action.payload,
        products: action.payload

      }
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }

    case GET_BRANDS: {
      return {
        ...state,
        brands: action.payload,
      }
    }
    case POST_PDT:
      return {
        ...state
      }
    case POST_PAGO:
      return {
        ...state
      }
    case GET_PAGINATE:
      return {
        ...state,
        allProducts: action.payload
      }
    case FILTER_BY_CATEGORY: {
      return {
        ...state,
        products: action.payload,
      }
    }
    case POST_USER:
      return {
        ...state,
        user: action.payload
      }
    case UPD_USER:
      return {
        ...state,
        user: action.payload
      }

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload)
      }
    case CLEAR_CART:
      return {
        ...state,
        cart: []
      }

    case SET_QUANTITY:
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        item.buyQ = action.payload.buyQ;
      }
      return {
        ...state,
        cart: state.cart
      };

    default:
      return state
  }
}

export default rootReducer
