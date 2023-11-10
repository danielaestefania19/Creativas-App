import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { iniciaSesionUsuario } from "../lib/firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await iniciaSesionUsuario(email, password);
      history.push("/inicio"); // Redirigir a la página de inicio después del inicio de sesión
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  }

  // const handleGoogleLogin = async () => {
  //   try {
  //     await inicioGoogle();
  //     history.push("/inicio"); // Redirigir a la página de inicio después del inicio de sesión
  //   } catch (error) {
  //     console.error("Error al iniciar sesión con Google:", error);
  //   }
  // }

  return (
    <div>
      <h2>Login</h2>
      <input 
      type="email" 
      placeholder="Correo electrónico" 
      value={email}
      onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
      type="password" 
      placeholder="Contraseña" 
      value={password}
      onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
      {/* <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button> */}
    </div>
  );
}

export default Login;
