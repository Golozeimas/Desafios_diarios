import { useState } from "react";

function mostrarProdutos(){
    const [produtos_games, setProdutos_games] = useState([
        { id: 1, nome: "FIFA 25", preco: "R$ 350,00" },
        { id: 2, nome: "Mario Kart 8 Deluxe", preco: "R$ 299,99" },
        { id: 3, nome: "Nintendo Switch", preco: "R$ 2499,00" },
    ])

    function remover(id: number){
        setProdutos_games(produtos_games.filter((produto)=> produto.id !== id))
    }

    return(
        <div>
            <h1 style={{fontFamily:"arial", fontSize:"200%", color:""}}>Lista de Produtos games</h1>
            {produtos_games.map((produto)=>(
                <div key={produto.id} style={{fontFamily: "arial"}}>
                    <p>Produto: {produto.nome}</p>
                    <p>Preço: {produto.preco}</p>
                    <button onClick={()=>remover(produto.id)}>Remover</button>
                    <hr />
                </div>
            ))}
        </div>
    )
}


export default mostrarProdutos