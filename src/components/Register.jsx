import  { useState } from "react";
import { useHistory } from 'react-router-dom';
import { registrarUsuario } from "../lib/firebase";

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await registrarUsuario(email, password);
      history.push("/inicio"); // Redirigir a la página de inicio después del registro
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  }

  return (
    <div>
      <h2>Registro</h2>
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
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
}

export default Register;

