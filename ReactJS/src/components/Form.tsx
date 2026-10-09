import { useState } from "react";

function Form(){
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [form, setForm] = useState(false);

    function enviarDados(e){
        e.preventDefault();
        if(nome === ""){
            alert("Digite seu nome")
            return
        }
        if(email === ""){
            alert("Digite seu email")
            return
        }
        setForm(true)
    }

    return (
        <div>
            <form onSubmit={enviarDados}>
                <label>Nome:</label>
                <input type="text"
                value={nome}
                onChange={(e)=> setNome(e.target.value)}
                placeholder="Digite seu nome"
                />
                <br />

                <label>Email:</label>
                <br />
                <input type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Digite seu email"
                />
                <br />

                <button type="submit">Enviar</button>
            </form>
            {form && 
                <div>
                    <p>Nome: {nome}</p>
                    <p>Email: {email}</p>
                </div>
            }
        </div>
    )
}

export default Form;