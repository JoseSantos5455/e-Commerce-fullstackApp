import Images from "../../components/DetailCard/Images"
import Info from "../../components/DetailCard/Info"
import Footer from "../../components/Footer/Footer"
import Nav from "../../components/navBar/Nav"
import Styles from './Detail.module.css'
import React, {useEffect} from 'react'
//redux
import { getDetail } from "../../Redux/actions/actions"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"


export default function Detail() {
  let dispatch = useDispatch()
  let product = useSelector(state => state.detail )
  const { id } = useParams();
  
  useEffect(() => {
      dispatch(getDetail(id))
    }, []);


  return (
<div className={Styles.wrapper}>
<Nav/>
<div className={Styles.data_detail}>
  <Images/>
  <Info/>
</div>
<Footer/>
</div>
  )
}


