import React from 'react'
import Styles from './Nav.module.css'

import { Button, Row, Col} from 'react-bootstrap';
import { BsSearch, BsPersonCircle, BsCart2} from 'react-icons/bs';
import { PiMapPinDuotone } from "react-icons/pi";

let imgLogo = 'https://iili.io/HDl2SoJ.png'

export default function Nav() {
  return (
      <Row className={ `${Styles.wrapper}`}>
        
        <Col className={`${Styles.div_logo} col-2`}>
            <img src={imgLogo} alt=""/>
        </Col>
        <Col className='col-1 d-flex flex-column align-items-center'>
            <PiMapPinDuotone/>
            <p>Argentina, Córdoba</p>
            
        </Col>
        <Col className={`${Styles.col_search} col-5`}>
            <input className={Styles.inp_search} type="text" />
            <button className={Styles.btn_search}>
                <BsSearch />
            </button>
           
        </Col>
        <Col className={`${Styles.section_btn}  col-4 d-flex align-items-center justify-content-end`} >

                <button className={` col-6 ${Styles.btn_profile_custom}`}>
                    <BsPersonCircle/>
                </button>
                <button  className={`col-6 ${Styles.btn_cart_custom}`}>
                    <BsCart2/>
                </button>

        </Col>

    </Row>

  
  )
}
