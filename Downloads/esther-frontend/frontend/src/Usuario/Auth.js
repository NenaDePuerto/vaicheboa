import { useState } from 'react'
import Login from './Login'
import Register from './Register'
//import './Auth.css'

function Auth() {
  const [isRegister, setRegister] = useState(true)

  return (
    <div className={'page Auth ' + (isRegister ? 'register' : 'login')}>
      <main>
        <h1>
          {isRegister ? 'Registro' : 'Iniciar sesión'}
        </h1>
        {isRegister ? <Register /> : <Login />}
      </main>
      <aside>
        {isRegister &&
          <p>
            ¿TIENES CUENTA CON NOSOTROS?
            <strong onClick={() => setRegister(false)}>Inicia sesión</strong>
          </p>
        }
        {!isRegister &&
          <p>
            ¿NO TIENES CUENTA?¿A QUÉ ESPERAS?
            <strong onClick={() => setRegister(true)}>REGÍSTRATE</strong>
          </p>
        }
      </aside>
    </div>
  )
}

export default Auth;