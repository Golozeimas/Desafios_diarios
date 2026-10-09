"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User1 = {
    id: 1,
    nome: "Matheus",
    email: "Matheus@gmail.com",
    idade: 20
};
const User2 = {
    id: 2,
    nome: "Lucas",
    email: "Lucas@gmail.com",
    idade: 21
};
function apresentarUsuario(user) {
    return `Seu ID: ${user.id}\nSeu nome: ${user.nome}\nSeu email: ${user.email}\nSua idade: ${user.idade}`;
}
console.log(apresentarUsuario(User1));
console.log(apresentarUsuario(User2));
//# sourceMappingURL=index.js.map