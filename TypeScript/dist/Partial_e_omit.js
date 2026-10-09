"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function retornaUsuarioAtualizado(user, user_alt) {
    return {
        ...user,
        ...user_alt
    };
}
const user = {
    id: 1,
    nome: "Matheus",
    email: "matheus@gmail.com",
    idade: 20
};
console.log(retornaUsuarioAtualizado(user, { nome: "PEDRO" }));
//# sourceMappingURL=Partial_e_omit.js.map