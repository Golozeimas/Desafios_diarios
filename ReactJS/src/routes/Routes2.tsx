import { Routes, Route, Navigate } from "react-router-dom";
import Painel from "../pages/Painel";
import Perfil from "../pages/Perfil";
import Configuracoes from "../pages/Configuracoes";


function App2() {
  return (
    <Routes>
    
    //Usar o Route pai e o Route index, o index redireciona para a primeira rota filha.
    //O Navigate redireciona para a rota filha que for especificada.
    // Use um componente de layout dentro do Route pai
    // Use o Outlet para renderizar as rotas filhas
    // Use o NavLink para criar links para as rotas filhas
      <Route path="/painel" element={<Painel />}>
        <Route index element={<Navigate to="perfil" replace />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="configuracoes" element={<Configuracoes />} />
      </Route>
    </Routes>
  );
}

export default App2;