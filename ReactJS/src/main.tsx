import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BuscarProduto from './components/Busca'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BuscarProduto />
  </StrictMode>,
)
