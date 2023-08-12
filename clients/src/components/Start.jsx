import React from 'react'
import Styles from './Start.module.css'
import NavBar from './navBar/Nav'
import Carrousel from './Carrousel/Carrousel'
import Categories from './Categories/Categories'

export default function start() {
  return (
    <div className= {Styles.wrapper}>
        <NavBar/>
        <Carrousel/>
        <Categories/>
    </div>
  )
}
