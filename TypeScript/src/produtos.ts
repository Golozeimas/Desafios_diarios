interface Produto{
    nome: string
    preco: number
}

function filtroDeProdutos(produtos: Produto[], precoMax: number): Produto[]{
    if(produtos.length === 0){
        console.log("Nenhum produto encontrado")
        return []
    }
    if(precoMax < 0){
        console.log("Preço máximo inválido")
        return []
    }

    const produtos_filtrados = produtos.filter((produto)=> produto.preco <= precoMax)

    return produtos_filtrados
}

const produtos: Produto[] = [
    { nome: "Produto 1", preco: 10 },
    { nome: "Produto 2", preco: 20 },
    { nome: "Produto 3", preco: 30 },
    { nome: "Produto 4", preco: 40 },
    { nome: "Produto 5", preco: 50 },
    { nome: "Produto 6", preco: 60 },
    { nome: "Produto 7", preco: 70 },
    { nome: "Produto 8", preco: 80 },
    { nome: "Produto 9", preco: 90 },
    { nome: "Produto 10", preco: 100 },
]


console.log(filtroDeProdutos(produtos, 60))
