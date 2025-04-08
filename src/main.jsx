import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Componentes from './Componentes.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Componentes />
  </StrictMode>,
)
