import { useState } from 'react'
import PropTypes from 'prop-types' // Importa PropTypes
import Styles from './Login.module.css'

const Login = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Implementa aquí tu lógica de inicio de sesión
    // Después del inicio de sesión exitoso, llama a onClose() para cerrar el modal
  }

  return (
    <div className={`${Styles.modalOverlay} ${isOpen ? Styles.open : ''}`}>
      <div className={Styles.modal}>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            className={Styles.inputForm}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Contraseña:</label>
          <input
            className={Styles.inputForm}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={Styles.buttonContainer}>
            <button className={Styles.submitButton} type="submit">
              Iniciar Sesión
            </button>
            <button className={Styles.closeButton} onClick={onClose}>
              X
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Login
