
type statusPedido = "pendente" | "pago" | "enviado" | "cancelado"

function recebeStatus(status: statusPedido): string{
    if(status === "pendente"){
        return "Pedido pendente"
    }else if(status === "pago"){
        return "Pedido pago"
    }else if(status === "enviado"){
        return "Pedido enviado"
    }else if(status === "cancelado"){
        return "Pedido cancelado"
    }
    
    throw new Error("Status inválido")
}

