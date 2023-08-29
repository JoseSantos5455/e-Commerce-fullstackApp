import Styles from './Carrousel.module.css'

export default function Carrousel() {
  return (
    <div className={Styles.car_custom}>
      <div className={Styles.carouselItem}>
        <div className={Styles.carouselCaption}>
          <h1 className={Styles.name_logo}>D’Lujo</h1>
          <p> Easiest way to buy onLine</p>
        </div>
      </div>
    </div>
  )
}
