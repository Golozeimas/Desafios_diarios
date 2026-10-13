import { Link } from "react-router-dom";

function Erro404(){
    return(
        <div style={{fontFamily:"monospace", color: "red", textAlign: "center",}}>
            <h1>Erro 404</h1>
            <p>Página não encontrada</p>
            <Link to={"/"}>Voltar para página inicial </Link>
        </div>
    )
}

export default Erro404;