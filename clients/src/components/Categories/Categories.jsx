import Styles from './Categories.module.css'

export default function Categories() {
  return (
    <div className={Styles.wrapper}>
      <h2 className={Styles.h2}>Categories</h2>
      <ul className={Styles.ul}>
        <li>Motherboards</li>
        <li>Ram</li>
        <li>GPU</li>
        <li>Cooling</li>
        <li>Storage</li>
        <li>Mouse</li>
        <li>Keyboard</li>
        <li>Monitor</li>
        <li>Sound</li>
        <li>Accesories</li>
        <li>Routers</li>
        <li>Power</li>
        <li>Case</li>
        <li>Others</li>
      </ul>
    </div>
  )
}
