import React, { useEffect } from 'react'
import Styles from './UserBuys.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../Redux/actions/actions'

export default function UserBuys() {
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getOrders())
  },[])
  let ordersRedux = useSelector(state => state.ordersRedux)
  return (
    <div className={Styles.separador}>
          <div className={Styles.buys_wrapper}>
              <h2>My Orders</h2>

              {ordersRedux[0] && (
              ordersRedux.map((pdt, idx)=>(
                <div className={Styles.order}>
                    <div className={Styles.items}>

                    </div>
                    <div className={Styles.datos} key={idx} >
                      <p> {`id: ${pdt.id}`} </p>
                      <p>{`Ordered: ${pdt.orderDate}`} </p>
                      {pdt.deliveredDate && (
                      <p>{`Arrives ${pdt.deliveredDate}`} </p>
                      )}
                      <p>{`Status: ${pdt.status}`} </p>
                    </div>
                </div>

              ))
              ) }{ordersRedux[0] && (
                ordersRedux.map((pdt, idx)=>(
                  <div className={Styles.order}>
                      <div className={Styles.items}>
  
                      </div>
                      <div className={Styles.datos} key={idx} >
                        <p> {`id: ${pdt.id}`} </p>
                        <p>{`Ordered: ${pdt.orderDate}`} </p>
                        <p>{`Status: ${pdt.status}`} </p>
                        <p>{`arrives ${pdt.deliveredDate}`} </p>
                      </div>
                  </div>
  
                ))
                ) }
          </div>
          <div className={Styles.sells_wrapper}>
              <h2>Sells</h2>
              <p>No sells</p>

          </div>
      </div>
  )
}
