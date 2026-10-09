interface Produto{
    id: number,
    nome: string,
    preco:number,
    descricao?: string
}

function exibirDetalhesDoProduto(produto: Produto): void{
    if(produto.descricao){
    console.log(`Detalhes do Produto ${produto.id} : ${produto.nome}
    Preço: ${produto.preco}
    Descrição: ${produto.descricao}`)
    } else{
        produto.descricao = "Sem descrição"
        console.log(`Detalhes do Produto ${produto.id} : ${produto.nome}
        Preço: ${produto.preco}
        Descrição: ${produto.descricao}`)
    }   
}

const produto1: Produto = {
    id: 1,
    nome: "Produto 1",
    preco: 10,
    descricao: "Descrição 1"
}

const produto2: Produto = {
    id: 2,
    nome: "Produto 2",
    preco: 20
}

exibirDetalhesDoProduto(produto1)
exibirDetalhesDoProduto(produto2)
