import Styles from './Images.module.css'
import GalleryProduct from "../Card/GalleryProduct";

export default function DetailCard({ img1, img_main }) {
  return (
    <div className={Styles.wrapper}>
      <GalleryProduct className={Styles.img_product}/>
    </div>
  )
  /*return (
    <div className={Styles.wrapper}>
      <div className={Styles.img_column}>
        <img src={img1} alt="image product" />
        <img src={img1} alt="image product" />
        <img src={img1} alt="image product" />
      </div>
      <div className={Styles.img_main}>
        <img src={img_main} alt="image product" />
      </div>
    </div>
  )*/
}
