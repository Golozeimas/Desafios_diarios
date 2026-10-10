import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UsoDeUserEffect from './components/Useeffect'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UsoDeUserEffect />
  </StrictMode>,
)
