import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MostrarProdutos from './components/Produtos'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MostrarProdutos />
  </StrictMode>,
)
