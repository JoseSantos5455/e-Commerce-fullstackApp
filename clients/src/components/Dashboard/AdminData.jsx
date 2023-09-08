import React, { useEffect, useState } from 'react';
import Styles from './AdminData.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, sellOrder } from '../../Redux/actions/actions';
import { NavLink } from 'react-router-dom';
import Review from '../../pages/Review/Review';

export default function AdminData() {
  const dispatch = useDispatch();
  const ordersRedux = useSelector((state) => state.ordersRedux);
  const userRedux = useSelector((state) => state.user);
  const reviewed = useSelector((state) => state.reviewed);

  const sellsOne = useSelector((state) => state.ordersRedux);
  const sells = sellsOne ? sellsOne.filter((pdt) => pdt.status === 'delivered') : [];

  let sellProduct = (id) => {
    dispatch(sellOrder(id));
    window.location.reload();
  };
  let [form, setForm] = useState(false)

  let formulario = ()=>{
    setForm(true)
  }
  let setReview = (userId, orderId, productId) =>{
    console.log(userId)
  }

  useEffect(() => {
    if (userRedux.profile === 'Admin') {
      dispatch(getOrders());
    } else {
      console.log(reviewed)
      dispatch(getOrders(userRedux.id));
    }
  }, []);

  return (
    <div className={Styles.separador}>
      <div className={Styles.buys_wrapper}>
        <h2>Orders</h2>

        {ordersRedux[0] ? (
          ordersRedux.map((pdt, idx) => (
            <div className={Styles.order} key={idx}>
              <div className={Styles.datos}>
               
                {pdt.orderDetails[0] ? (
                  <div className="">
                  <p>{pdt.orderDetails[0].product}</p>
                  </div>
                ) : (
                  `id: ${pdt.id}`
                )}
                <p>{`Ordered: ${pdt.orderDate}`}</p>
                {pdt.deliveredDate && <p>{`Arrives ${pdt.deliveredDate}`}</p>}
                <p>{`Status: ${pdt.status}`}</p>
              </div>

              {userRedux.profile === 'Admin' ? (
                <button className={Styles.btn_sell} onClick={() => sellProduct(pdt.id)}>
                  Confirm & Sell
                </button>
              ) : (
                pdt.status === 'delivered' &&  (

                  form ? (

                    <Review
                    userId={userRedux.id}
                    orderId={pdt.id}
                    productId={pdt.orderDetails[0] && pdt.orderDetails[0].productId ? pdt.orderDetails[0].productId : 'no existe'}
                    />
                  ):(
                    
                      <button key={idx} className={Styles.btn_sell}
                      onClick={()=>{ formulario()}}
                      >
                          <span>Review</span>
                        
                      </button>
                  )


                )
              
              )
              
              }
            </div>
          ))
                  ) : (
          <div className={Styles.no_buys}>
            <p>
              There are no orders in your account yet. <NavLink to="/products">Browse our products</NavLink> and start shopping!
            </p>
          </div>
        )}
      </div>

      {userRedux.profile === 'Admin' && (
        <div className={Styles.sells_wrapper}>
          <h2>Sells</h2>
          {sells.length > 0 ? (
            sells.map((pdt, idx) => (
              <div className={Styles.order} key={idx}>
                <div className={Styles.datos}>
                  {pdt.orderDetails[0] ? <p>{pdt.orderDetails[0].product}</p> : `id: ${pdt.id}`}
                  <p>{`Ordered: ${pdt.orderDate}`}</p>
                  {pdt.deliveredDate && <p>{`Arrives ${pdt.deliveredDate}`}</p>}
                  <p>{`Status: ${pdt.status}`}</p>
                </div>
              </div>
            ))
          ) : (
            <div className={Styles.no_sells}>
              <p>You haven't made any sales yet. Why not start selling your products in D'Lujo now?</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
