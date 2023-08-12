import React from 'react'
import Styles from './Start.module.css'
import NavBar from './navBar/Nav'

export default function start() {
  return (
    <div className= {Styles.wrapper}>
        <NavBar/>
    </div>
  )
}
