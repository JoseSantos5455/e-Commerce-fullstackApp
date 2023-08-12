import React from 'react'
import Styles from './Nav.module.css'

import { Button, Row, Col} from 'react-bootstrap';
import { BsSearch, BsPersonCircle, BsCart2} from 'react-icons/bs';


export default function Nav() {
  return (
  
    <Row className={ `${Styles.wrapper}`}>
        <Col className="logo col-2">
            <p>Logo</p>
        </Col>
        <Col className={`${Styles.col_search} col-6`}>
            <input className={Styles.inp_search} type="text" />
            <button className={Styles.btn_search}>
                <BsSearch />
            </button>
           
        </Col>
        <Col className='col-1'>
            <p>Ship to</p>
        </Col>
        <Col className="section col-3" >
            <Row>

                <button className={` col-6 ${Styles.btn_profile_custom}`}>
                    <BsPersonCircle/>
                    <p>login</p>
                </button>
                <button  className={`col-6 ${Styles.btn_cart_custom}`}>
                    <BsCart2/>
                    <p>cart</p>
                </button>

            </Row>
        </Col>

    </Row>

  
  )
}
