import React from 'react'
import Styles from './BuyView.module.css'
import Card from '../../components/Card/Card.jsx'
import Categories from '../../components/Categories/Categories'
import ListCard from '../../components/Card/ListCard'
import Nav from '../../components/navBar/Nav'


export default function BuyView() {
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
