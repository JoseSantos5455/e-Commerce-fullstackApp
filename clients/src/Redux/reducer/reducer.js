import { POST_PDT, GET_PDT, GET_DET, GET_CATEGORIES, FILTER_BY_CATEGORY, ORDER_BY_PRICE, ORDER_BY_VALORATION } from "../actions/actionTypes";

const initialState = {
      base: [],
      products: [],
      allProducts: [],
      categories:[],
      detail:[]
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PDT:
        return{
          ...state,
            products: action.payload,
            allProducts: action.payload
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

        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }

        case FILTER_BY_CATEGORY:
          const allProductsCat = state.allProducts;
          const filteredCategory = action.payload === 'All'? allProductsCat : allProductsCat.filter(v =>v.category == action.payload);
          return {
              ...state,
              products: filteredCategory
          }
      
      case ORDER_BY_PRICE:
          let orderPriceAsc = state.products.slice().sort((a, b) => {

              if(Number(a.price) > Number(b.price)) return 1;

              if(Number(b.price) > Number(a.price)) return -1;

              return 0;
          })

          return {
              ...state,
              products: action.payload === 'asc' ? orderPriceAsc : orderPriceAsc.reverse()
          }

        
    case ORDER_BY_VALORATION:

        let orderValorationAsc = state.products.slice().sort((a, b) => {

            if(Number(a.valoration) > Number(b.valoration)) return 1;
          
            if(Number(b.valoration) > Number(a.valoration)) return -1;
          
            return 0;
        })
        
        return {
            ...state,
            products: orderValorationAsc
    }

  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  