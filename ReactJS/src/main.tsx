import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Temas from './components/Temas'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Temas />
  </StrictMode>,
)
