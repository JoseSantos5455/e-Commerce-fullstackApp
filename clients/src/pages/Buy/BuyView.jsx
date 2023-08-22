import React from 'react'
import Styles from './BuyView.module.css'
import Card from '../../components/Card/Card.jsx'
import Categories from '../../components/Categories/Categories'
import ListCard from '../../components/Card/ListCard'


export default function BuyView() {
  return (
    <div className='d-flex'>
      <div className={Styles.categories}>
        <Categories />
      </div>
      <div className={Styles.listCard} >
        <ListCard />
      </ div>
    </div>

  )
}
