import React, { useEffect } from 'react'
import Styles from './UserBuys.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../Redux/actions/actions'
import { NavLink } from 'react-router-dom'

export default function AdminData() {
  let dispatch = useDispatch()
  let sells = null;
  let ordersRedux = useSelector(state => state.ordersRedux);
  const userRedux = useSelector(state => state.user)
  useEffect(()=>{
    if(userRedux.profile === 'Admin'){
      dispatch(getOrders())
    }
    else{
      dispatch(getOrders(userRedux.id))
      
    }
  },[])

  return (
    <div className={Styles.separador}>
          <div className={Styles.buys_wrapper}>
              <h2>Orders</h2>

              {ordersRedux[0] ? (
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
              ):(
                <div className={Styles.no_buys}>
                  <p>There are no orders in your account yet. <NavLink to="/products">Browse our products</NavLink> and start shopping!</p>                  
                </div>

              )
              }
          </div>
          {userRedux.profile === 'Admin' && (

          <div className={Styles.sells_wrapper}>
            <h2>Sells</h2>
            {sells ? (null):(
              <div className={Styles.no_sells}>
              <p>You haven't made any sales yet. Why not start selling your products in D'Lujo now?</p>
              </div>
            )}
          </div>
          )}
      </div>
  )
}
