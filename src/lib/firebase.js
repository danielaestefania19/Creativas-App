// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signInWithPopup,
  signOut, 
  GoogleAuthProvider
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBRofRUtMyYyszxyUKit8su7eCbTCJjXyo",
  authDomain: "creativas-da377.firebaseapp.com",
  projectId: "creativas-da377",
  storageBucket: "creativas-da377.appspot.com",
  messagingSenderId: "1020768025994",
  appId: "1:1020768025994:web:443baabb41877f970c1c73",
  measurementId: "G-6JRFQ57ZNV"
};

// Inicializar Firebase
const appFirebase = initializeApp(firebaseConfig);

// Obtener la instancia de autenticación
const auth = getAuth(appFirebase);
const provider = new GoogleAuthProvider();

// Función para el registro de usuarios
export const registrarUsuario = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Función para el inicio de sesión
export const iniciaSesionUsuario = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

//Usuario con inicio de sesion 
export const verifyUser = (knowUser) => {
  return onAuthStateChanged(auth, knowUser);
};

// Inicio de sesion con google
export const inicioGoogle = () => {
  return signInWithPopup(auth, provider);
};

// Función para cerrar sesión
export const salirSesion = () => {
  return signOut(auth);
};


export default appFirebase;
