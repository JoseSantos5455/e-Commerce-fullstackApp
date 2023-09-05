import Images from '../../components/DetailCard/Images'
import Info from '../../components/DetailCard/Info'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/navBar/Nav'
import Styles from './Detail.module.css'
import { useEffect } from 'react'
//redux
import { getDetail } from '../../Redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


export default function Detail() {
  let dispatch = useDispatch()
  let product = useSelector((state) => state.detail)
  const { id } = useParams()

  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch, id])



  return (
    <div className={Styles.wrapper}>
      <Nav />
      <div className={Styles.data_detail}>
        <Images
          img1={product.image}
          img2={product.image}
          img3={product.image}
          img4={product.image}
          img_main={product.image}
        />
        <Info
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          valoration={product.valoration}
          stock={product.stock}
        />
      </div>
      <Footer />
    </div>
  )
}
