import { useState } from "react";
import { useParams } from "react-router-dom";


function Produtos(){

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

    const {id} = useParams()

    function filtrarProdutos(){
        const produto = produtosGames.filter((produto) => produto.id === Number(id))

        if(produto.length > 0){
            return produto.map((produto)=> (
                <div key={produto.id}>
                    <h1>Nome: {produto.nome}</h1>
                    <h2>Preço: R$ {produto.preco}</h2>
                    <h3>Categoria: {produto.categoria}</h3>
                </div>    
            ))
        }else{
            return <p>Produto não encontrado</p>
        }
    }

    return(
        <div>
            {filtrarProdutos()}
        </div>
    )
}

export default Produtos;