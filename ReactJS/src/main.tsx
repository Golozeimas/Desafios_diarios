import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserCard from './components/UserCard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserCard nome="Matheus" profissao="Programador" cidade="São Paulo" />
    <UserCard nome="Pedro" profissao="Programador" cidade="São Paulo" />
    <UserCard nome="Gabriel" profissao="Engenheiro" cidade="Teresina"/>
  </StrictMode>,
)
