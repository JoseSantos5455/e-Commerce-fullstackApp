import { Link } from 'react-router-dom'
import styles from './Featured.module.css'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../Redux/actions/actions'

const Featured = () => {
  let dispatch = useDispatch()

  let dispatchStart = ()=>{
    dispatch(getProducts)
  }

  return (
<div className={`${styles.featured_container}`}>
      <div className={`${styles.products_name}`}>
        <h1 className={styles.title_product}>
          New products:
          <span className={styles.section}> New section available </span>
        </h1>
        
      </div>
      <div className={styles.btn_container}>
        <button className={styles.btn_better} >
            <Link className={styles.btn_better} to={'/products'} >
              Shopping
            </Link>
            </button>
        <button className={styles.btn_category}>How it works?</button>
      </div>
    </div>
  )
}

export default Featured
