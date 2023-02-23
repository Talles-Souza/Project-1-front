import React from 'react'
import "./css/global.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Root } from "./config/routes";
import { AuthenticationProvider } from './services/context/token';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <AuthenticationProvider>
      <ToastContainer
        position='top-right'
        hideProgressBar
        theme='colored'
      />
      <Root />
    </AuthenticationProvider>
  )
}

export default App
