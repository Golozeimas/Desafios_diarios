import { useState } from "react";

  const produtos =[
        {id:1, nome: "FIFA 25", preco: "R$ 350,00"},
        {id:2, nome: "Mario Kart 8 Deluxe", preco: "R$ 299,99"},
        {id:3, nome: "Nintendo Switch", preco: "R$ 2499,00"},
    ]

function BuscarProduto(){
  

    const [busca, setBusca] = useState('')

    const [resultados, setResultados] = useState([...produtos])

    function buscar(busca: string){
        
        if(busca === ""){
            setResultados(produtos)
            return
        }

        const filteredProdutos = produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(busca.toLowerCase()))
        
        setResultados(filteredProdutos)
}

    return(
        <div>
            <label>Busca de produtos: </label>
            <br />
            <input 
            type="text"
            value={busca}
            onChange={(e)=>{
                setBusca(e.target.value)
                buscar(e.target.value)   
            }}

             />

             <div>
                {resultados.length === 0 ? (
                    <p>Nenhum produto encontrado</p>
                ):(
                    resultados.map((produto)=>( 
                        <div key={produto.id}>
                            <p>Nome: {produto.nome}</p>
                            <p>Preço: {produto.preco}</p>
                            <hr />
                        </div>
                    ))
                )}
             </div>
             
            
        </div>
    )

}


export default BuscarProduto;