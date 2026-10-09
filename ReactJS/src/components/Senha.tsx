import { useState } from "react";




function MostrarSenha(){
    const [password, setPassword] = useState("password")
    const [button, setButton] = useState("Mostrar Senha")
    
    function mudarEstadoButton(){
        if(button === "Mostrar Senha"){
            setButton("Ocultar Senha")
            setPassword("text")
        } else {
            setButton("Mostrar Senha")
            setPassword("password")
        }
    }

    return (
        <div>
            <input type={password}
             />
             <button onClick={mudarEstadoButton}>{button}</button>
        </div>
    )
}


export default MostrarSenha;