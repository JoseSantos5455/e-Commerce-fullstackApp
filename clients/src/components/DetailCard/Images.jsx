import Styles from './Images.module.css'

export default function DetailCard({ img1, img_main }) {
  /* <img src={img1} alt="image product" />
        <img src={img1} alt="image product" />*/
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.img_column}>
        <img src={img1} alt="image product" />       
      </div>
      <div className={Styles.img_main}>
        <img src={img_main} alt="image product" />
      </div>
    </div>
  )
}
