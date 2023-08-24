import { useState } from 'react'

const CreateAccount = () => {
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const handleCreateAccount = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h2>Crear Cuenta</h2>
      <form onSubmit={handleCreateAccount}>
        <label>Nuevo Email:</label>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <label>Nueva Contraseña:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit">Crear Cuenta</button>
      </form>
    </div>
  )
}

export default CreateAccount
