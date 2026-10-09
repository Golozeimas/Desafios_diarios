import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MostrarSenha from './components/Senha'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MostrarSenha />
  </StrictMode>,
)
