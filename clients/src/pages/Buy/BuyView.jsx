import  { useEffect, useState } from 'react'
import Styles from './BuyView.module.css'
import Categories from '../../components/Categories/Categories'
import OrderBy from '../../components/OrderBy/OrderBy'
import Filters from '../../components/Filters/Filters'
import ListCard from '../../components/Card/ListCard'
import Nav from '../../components/navBar/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, filterByGenres, orderByPrice, orderByValoration } from '../../redux/actions/actions'
import Footer from '../../components/Footer/Footer'
export default function BuyView() {
  
  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProducts())
  },[])

  function handlerCategories(e) {
    e.preventDefault();
    dispatch(filterByGenres(e.target.value));
  }

  function handlerByValoration(e) { 
    dispatch(orderByValoration(e))
  }

  function handlerByPrice(e) { 
    dispatch(orderByPrice(e));
  }

  return (
    <div className="">
      <Nav/>

    <div className={Styles.wrapper}>
      <div className={Styles.categories}>
        <OrderBy handlerByValoration={handlerByValoration} handlerByPrice={handlerByPrice} />
        <Filters handlerCategories={handlerCategories}/>
        <Categories />
      </div>
      <div className={Styles.listCard} >
        <ListCard />
      </ div>
    </div>
    <Footer/>
    </div>

  )
}
