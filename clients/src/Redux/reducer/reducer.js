

import {
  POST_PDT,
  GET_PDT,
  GET_NAM,
  GET_DET,
  GET_CATEGORIES,
  FILTER_BY_CATEGORY,
  ORDER_BY_PRICE,
  ORDER_BY_VALORATION,
  GET_PAGINATE,
  POST_PAGO
} from '../actions/actionTypes'

const initialState = {
  base: [],
  products: [],
  allProducts: [],
  categories: [],
  detail: [],
  product_name: []
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

    case FILTER_BY_CATEGORY: {
      const allProductsCat = state.allProducts
      const filteredCategory =
        action.payload === 'All'
          ? allProductsCat
          : allProductsCat.filter((v) => v.category === action.payload)
      return {
        ...state,
        products: filteredCategory,
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
    case ORDER_BY_PRICE: {
      const orderPriceAsc = [...state.products].sort((a, b) => {
        if (Number(a.price) > Number(b.price)) return 1
        if (Number(b.price) > Number(a.price)) return -1
        return 0
      })

      return {
        ...state,
        products:
          action.payload === 'asc' ? orderPriceAsc : orderPriceAsc.reverse(),
      }
    }

    case ORDER_BY_VALORATION: {
      let orderValorationAsc = state.products.slice().sort((a, b) => {
        if (Number(a.valoration) > Number(b.valoration)) return 1

        if (Number(b.valoration) > Number(a.valoration)) return -1

        return 0
      })

      return {
        ...state,
        products: orderValorationAsc,
      }
    }

    case POST_PAGO:
      return {
        ...state,
      }

    default:
      return state
  }
}

export default rootReducer
