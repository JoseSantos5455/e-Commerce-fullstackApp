import React from 'react'
import Styles from './DashPro.module.css';
import Form from '../CreateProduct/Form';


export default function DashPro() {
  return (
    <div className={Styles.view}>
      <h1>Admin dashboard</h1>
      <div className={Styles.separador}>
          <div className={Styles.buys_wrapper}>
              <h2>My Orders</h2>
              <div className={Styles.order}>
                
              <div className={Styles.items}>
                  <p>id</p>
                  <p>date</p>
                  <p>Product</p>
                  <p>State</p>
                  <p>arrives</p>
                </div>
                <div className={Styles.datos}>
                  <p>#123</p>
                  <p>23/07/2023</p>
                  <p>Cacatúa</p>
                  <p> Payd </p>
                  <p> 29/07/2023</p>

                </div>
              </div>
              <div className={Styles.order}>
                
              <div className={Styles.items}>
                  <p>id</p>
                  <p>date</p>
                  <p>Product</p>
                  <p>State</p>
                  <p>arrives</p>
                </div>
                <div className={Styles.datos}>
                  <p>#123</p>
                  <p>23/07/2023</p>
                  <p>Keyboard Bluetooth</p>
                  <p> Payd </p>
                  <p> 29/07/2023</p>

                </div>
              </div><div className={Styles.order}>
                
                <div className={Styles.items}>
                    <p>id</p>
                    <p>date</p>
                    <p>Product</p>
                    <p>State</p>
                    <p>arrives</p>
                  </div>
                  <div className={Styles.datos}>
                    <p>#123</p>
                    <p>23/07/2023</p>
                    <p>Pillow 2.0</p>
                    <p> Payd </p>
                    <p> 29/07/2023</p>
  
                  </div>
                </div><div className={Styles.order}>
                
                <div className={Styles.items}>
                    <p>id</p>
                    <p>date</p>
                    <p>Product</p>
                    <p>State</p>
                    <p>arrives</p>
                  </div>
                  <div className={Styles.datos}>
                    <p>#123</p>
                    <p>23/07/2023</p>
                    <p>Producto</p>
                    <p> Payd </p>
                    <p> 29/07/2023</p>
  
                  </div>
                </div>
              
           </div>
          <div className={Styles.sells_wrapper}>
              <h2>Sells</h2>

      </div>
      </div>
      <div className={Styles.form_wrapper}>
        <Form/>
      </div>

    </div>
  )
}
