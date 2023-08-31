import  { useEffect, useState } from 'react'
import Styles from './BuyView.module.css'
import OrderBy from '../../components/OrderBy/OrderBy'
import Filters from '../../components/Filters/Filters'
import ListCard from '../../components/Card/ListCard'
import Nav from '../../components/navBar/Nav'
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux'
import {
  getProducts,
  getBrands,
  filterByGenres,
} from '../../Redux/actions/actions'
import Footer from '../../components/Footer/Footer'


const initialFilters = { 
  category: 0,
  valoration: 0,
  price: '',
  brand: ''
};

export default function BuyView() {
  //const {  isAuthenticated, isLoading } = useAuth0();
  let prods = useSelector(state => state.products)
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentBrandValue, setCurrentBrandValue] = useState('');
  const [filters, setFilters] = useState(initialFilters);

  let dispatch = useDispatch()

  useEffect(()=>{
    if(!prods){
      dispatch(getProducts())
    }
  },[])

  useEffect(()=>{
    if(!prods){
      dispatch(getBrands())
    }
  },[])

  useEffect(() => {
    dispatch(filterByGenres(filters));
  }, [filters]);

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
    handlerFilters('category', event.target.value)
  };

  const handleSelectChangeBrand = (event) => {
    setCurrentBrandValue(event.target.value);
    handlerFilters('brand', event.target.value)
  };

  function handlerFilters(filterType, e) {
    if(filterType === "category"){
      const updatedFilters = {
        ...filters,
        category: e
      };
      setFilters(updatedFilters);
      dispatch(filterByGenres(filters))
    }
    if(filterType === "brand"){
      const updatedFilters = {
        ...filters,
        brand: e,
      };
      setFilters(updatedFilters);
      dispatch(filterByGenres(filters))
    } 
    if(filterType === "valoration"){
      const updatedFilters = {
        ...filters,
        valoration: filterType,
        price: ''
      };
      setFilters(updatedFilters);
      dispatch(filterByGenres(filters))
    } 
    if(filterType === "price"){
      const updatedFilters = {
        ...filters,
        price: e,
        valoration:''
      };
      setFilters(updatedFilters);
      dispatch(filterByGenres(filters))
    } 
    if(filterType === "reset"){
      setFilters(initialFilters);
      dispatch(filterByGenres(initialFilters))
    }
  }

  return (
    <div>
      <div className={Styles.container_buy}>
        <Nav />
        <div className={Styles.wrapper}>
          <div className={Styles.filters}>
            <button className={Styles.btn} onClick={() => {handlerFilters("reset", "")}}>
              Reset Filters
            </button>   
            <OrderBy handlerFilters={handlerFilters}/>
            <Filters 
              selectedCategory={selectedCategory} 
              onSelectChange={handleSelectChange} 
              currentBrandValue={currentBrandValue}
              onSelectChangeBrand={handleSelectChangeBrand}/>                     
          </div>
          <div className={Styles.listCard}>
            <ListCard />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
