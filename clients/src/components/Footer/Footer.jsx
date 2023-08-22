import styles from './Footer.module.css'
import logo from '../../images/logo.png'
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsTelephoneFill,
  BsEnvelope,
} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className={styles.container_footer}>
      <div className={styles.list_footer}>
        <div className={styles.container_contact}>
          <div className={`${styles.contact} ${styles.contact_1}`}>
            <BsTelephoneFill />
            <p className={styles.paragraph_contact}>+59 9 98243533</p>
          </div>
          <div className={styles.contact}>
            <BsEnvelope />
            <p className={styles.paragraph_contact}>DLujo@Dlujo.com</p>
          </div>
        </div>
        <div className={styles.social_network}>
          <BsInstagram />
          <BsFacebook />
          <BsTwitter />
        </div>
        <div className={styles.div_logo}>
          <img src={logo} alt="logo" className={styles.logo} />
          <p className={styles.paragraph}>Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
