

import {
  POST_PDT,
  GET_PDT,
  GET_NAM,
  GET_DET,
  GET_CATEGORIES,
  GET_BRANDS,
  FILTER_BY_CATEGORY,
  GET_PAGINATE,
  POST_PAGO
} from '../actions/actionTypes'

const initialState = {
  base: [],
  products: [],
  allProducts: [],
  categories: [],
  brands: [],
  detail: [],
  product_name: [],
  filters: []
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
        products : action.payload
      
      }
    case POST_PDT:
      return {
        ...state,
      }

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }

    case GET_BRANDS:{
      return {
        ...state,
        brands: action.payload,
      }
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
      case POST_PAGO: 
        return {
          ...state
        }
      case GET_PAGINATE:
          return {
            ...state,
            products: action.payload
          } 
      case FILTER_BY_CATEGORY:
          const allProductsCat = state.allProducts;
          const filteredCategory = action.payload === 'All'? allProductsCat : allProductsCat.filter(v =>v.category == action.payload);
          return {
              ...state,
              products: filteredCategory
          }
    case FILTER_BY_CATEGORY: {
      return {
        ...state,
        products: action.payload,
      }
    }

    default:
      return state
  }
}

export default rootReducer
