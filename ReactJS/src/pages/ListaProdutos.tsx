import { Link } from "react-router-dom";
import { useState } from "react";

function ListaProdutos(){

    const [produtosGames, setProdutosGames] = useState([{
        id: 1, 
        nome: "FIFA 26",
        preco: 300,
        categoria:"esporte"
    },
    {
        id: 2, 
        nome: "Mario Kart 8",
        preco: 200,
        categoria:"esporte"
    },
    {
        id: 3, 
        nome: "Nintendo Switch",
        preco: 2500,
        categoria:"console"
    },
    {
        id:4,
        nome:"GTA V",
        preco:150,
        categoria:"ação"
    }])

    return(
        <div>
            <h1>Lista de Produtos</h1>
            {produtosGames.map((produto)=> (
                <Link to={`/produtos/${produto.id}`}>
                    <p>{produto.nome}</p>
                </Link>
            ))}
        </div>
    )
}

export default ListaProdutos;