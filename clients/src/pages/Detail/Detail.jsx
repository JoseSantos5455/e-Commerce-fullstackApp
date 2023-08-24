import Images from "../../components/DetailCard/Images"
import Info from "../../components/DetailCard/Info"
import Footer from "../../components/Footer/Footer"
import Nav from "../../components/navBar/Nav"
import Styles from './Detail.module.css'

const Detail = () => {
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

export default Detail