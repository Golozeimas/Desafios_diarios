type User = {
    id: number,
    nome: string
    idade: number,
    email: string
}

// cria um tipo sem propriedade 'id'
type UserProtegido = Omit<User, "id">

type UserComAlteracoes = Partial<UserProtegido>

function retornaUsuarioAtualizado(user: User, user_alt: UserComAlteracoes){
    return{
        ...user,
        ...user_alt
    }
}

const user: User = {
    id: 1,
    nome: "Matheus",
    email: "matheus@gmail.com",
    idade: 20
}


console.log(retornaUsuarioAtualizado(user,{nome: "PEDRO"}))
