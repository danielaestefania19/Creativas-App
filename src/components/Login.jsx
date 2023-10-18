import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from '../lib/firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(email, password);
      history.push('/inicio'); // Redirige a la página de inicio después del inicio de sesión
    } catch (error) {
      console.error('Error al iniciar sesión: ', error);
    }
  }

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <input type="email" placeholder="Correo Electrónico" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
}

export default Login;
