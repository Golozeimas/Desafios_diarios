import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Count from './components/Counter'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Count />
  </StrictMode>,
)
