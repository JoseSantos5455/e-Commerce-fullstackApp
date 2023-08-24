import React, { useEffect } from 'react'
import Styles from './BuyView.module.css'
import Card from '../../components/Card/Card.jsx'
import Categories from '../../components/Categories/Categories'
import ListCard from '../../components/Card/ListCard'
import Nav from '../../components/navBar/Nav'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../Redux/actions/actions'
export default function BuyView() {
  let dispatch = useDispatch()
 useEffect(()=>{
     dispatch(getProducts())
     console.log('dispatched')
 },[])
  return (
    <div className="">
      <Nav/>

    <div className={Styles.wrapper}>
      <div className={Styles.categories}>
        <Categories />
      </div>
      <div className={Styles.listCard} >
        <ListCard />
      </ div>
    </div>
    </div>

  )
}
