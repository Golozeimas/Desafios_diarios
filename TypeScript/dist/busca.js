"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { id: 1, nome: "Matheus" },
    { id: 2, nome: "Lucas" },
    { id: 3, nome: "Pedro" },
    { id: 4, nome: "Thiago" },
    { id: 5, nome: "Felipe" },
];
function buscarUsuarioPorId(id) {
    if (id < 0) {
        console.log("ID inválido");
        return undefined;
    }
    const user = users.find((user) => user.id === id) ?? undefined;
    if (user !== undefined) {
        console.log(user.nome);
    }
    else {
        console.log("Usuário não encontrado");
    }
}
buscarUsuarioPorId(3);
buscarUsuarioPorId(1);
buscarUsuarioPorId(6);
//# sourceMappingURL=busca.js.map