type User = {
  id: number;
  nome: string;
  email: string;
  idade: number;
}

const User1: User = {
    id: 1,
    nome: "Matheus",
    email: "Matheus@gmail.com",
    idade: 20
}

const User2: User = {
    id: 2,
    nome: "Lucas",
    email: "Lucas@gmail.com",
    idade: 21
}

function apresentarUsuario(user: User): string{
    return `Seu ID: ${user.id}\nSeu nome: ${user.nome}\nSeu email: ${user.email}\nSua idade: ${user.idade}`;
}

console.log(apresentarUsuario(User1))
console.log(apresentarUsuario(User2))