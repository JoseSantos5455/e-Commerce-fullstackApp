import React from 'react'
import Styles from './Nav.module.css'

import { Button, Row, Col} from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';


export default function Nav() {
  return (<>
  
    <Row className={ `${Styles.wrapper}`}>
        <Col className="logo col-2">
            <p>Logo</p>
        </Col>
        <Col className="buscador col-6">
            <input className={Styles.inp_search} type="text" />
            <button className={Styles.btn_search}>
                <BsSearch />
            </button>
        </Col>
        <Col className="section col-4">
            <Col className="location">
                <Button className={`${Styles.btn_log} btn-flat btn-xxl`}>Login</Button>
            </Col>
            <Col className="login"></Col>

        </Col>

    </Row>

  </>
  )
}
