"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function desconto(preco, desconto) {
    if (preco < 0) {
        console.log("preço negativo");
        return 0;
    }
    if (desconto > 100 || desconto < 0) {
        console.log("desconto não é viável");
        return 0;
    }
    let precoFinal = preco - ((desconto / 100) * preco);
    return precoFinal;
}
console.log(desconto(122, 15));
//# sourceMappingURL=precos.js.map