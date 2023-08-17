import React from 'react'
import Styles from './Nav.module.css'

import { Button, Row, Col} from 'react-bootstrap';
import { BsSearch, BsPersonCircle, BsCart2} from 'react-icons/bs';
import { PiMapPinDuotone } from "react-icons/pi";

let imgLogo = 'https://iili.io/HDl2SoJ.png'

export default function Nav() {
  return (
      <Row className={ `${Styles.wrapper}`}>
        
        <Col className={`${Styles.div_logo} d-none d-sm-block  col-sm-1`}>
            <img className='d-block w-8' src={imgLogo} alt=""/>
        </Col>
        <Col className='col-3 d-flex flex-column align-items-center'>
            <PiMapPinDuotone/>
            <p>Argentina, Córdoba</p>
            
        </Col>
        <Col className={`${Styles.col_search} col-7 col-sm-5`}>
            <input className={Styles.inp_search} type="text" />
            <button className={Styles.btn_search}>
                <BsSearch />
            </button>
           
        </Col>
        <Col className={`${Styles.section_btn}  col-2 col-sm-3 d-flex align-items-end justify-content-end`} >

                    <BsPersonCircle className={` col-6 ${Styles.btn_profile_custom}`}/>
                    <BsCart2 className={`col-6 ${Styles.btn_cart_custom}`}/>
                

        </Col>

    </Row>

  
  )
}
