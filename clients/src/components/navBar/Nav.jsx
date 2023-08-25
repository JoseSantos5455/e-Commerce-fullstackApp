import { useState } from 'react'
import Styles from './Nav.module.css'
import logo from '../../images/logo.png'
import { BsSearch } from 'react-icons/bs'
import Login from '../Login/Login'
import { Link } from 'react-router-dom'


export default function Nav() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const openLoginModal = () => {
    setIsLoginModalOpen(true)
  }

  const closeLoginModal = () => {
    setIsLoginModalOpen(false)
  }

  return (
    <div className={Styles.wrapper}>
      <div className={`${Styles.col_5}`}>
        <div className={`${Styles.div_logo} ${Styles.col_3}`}>
          <Link to="/">
            <img src={logo} alt="logo" className={`${Styles.logo}`} />
          </Link>
        </div>
        <div className={` ${Styles.col_1}`}>
          <Link to="/">
            <button className={`${Styles.background} ${Styles.font}`}>
              Inicio
            </button>
          </Link>
        </div>
        <div className={`${Styles.col_3}`}>
          <div className={Styles.dropdown}>
            <Link to="/products">
              <button
                className={`${Styles.background} ${Styles.dropdownToggle}`}
              >
                Products
              </button>
            </Link>
            <div className={`${Styles.dropdownMenu}`}>
              <div className={Styles.dropdownHeader}>Discos Duros</div>
              <a href="#" className={Styles.dropdownItem}>
                SSD
              </a>
              <a href="#" className={Styles.dropdownItem}>
                Rígido
              </a>
            </div>
          </div>
        </div>
        <div className={` ${Styles.col_1}`}>
          <h6 className={Styles.font}>Ayuda</h6>
        </div>
        <div className={` ${Styles.col_4}`}>
          <h6 className={Styles.font}>Sobre Nosotros</h6>
        </div>
      </div>
      <div className={` ${Styles.col_4}`}>
        <form className={`${Styles.col_search} `}>
          <input
            type="text"
            placeholder="Buscar"
            className={`${Styles.searchInput}`}
          />
          <button type="submit" className={`${Styles.searchButton}`}>
            <BsSearch />
          </button>
        </form>
      </div>
      <div className={` ${Styles.col_3}`}>
        <div className={Styles.container_btn}>
          <div className={` ${Styles.containerLogin}`}>
            <button
              className={`${Styles.actionButton2} ${Styles.login}`}
              onClick={openLoginModal}
            >
              Iniciar sesión
            </button>
          </div>
          <div className={`${Styles.containerCreate}`}>
            <button className={`${Styles.actionButton} ${Styles.create}`}>
              Crear cuenta
            </button>
          </div>
        </div>
      </div>
      {isLoginModalOpen && (
        <Login isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      )}
    </div>
  )
}
