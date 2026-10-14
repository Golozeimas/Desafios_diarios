import { NavLink, Outlet } from "react-router-dom";

function Painel() {
  return (
    <div>
      <h1>Painel do Usuário</h1>

      <nav>
        <NavLink to="perfil">Perfil</NavLink>
        {" | "}
        <NavLink to="configuracoes">Configurações</NavLink>
      </nav>

      <hr />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Painel;