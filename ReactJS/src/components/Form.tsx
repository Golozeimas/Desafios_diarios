import { useState } from "react";

function Form() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [form, setForm] = useState(false);

    function enviarDados(e) {
        e.preventDefault();
        if (nome.trim() === "") {
            alert("Digite seu nome")
            return
        }
        if (email.trim() === "") {
            alert("Digite seu email")
            return
        }
        setForm(true)
    }

    return (
        <div>
            <form onSubmit={enviarDados}>
                <label>Nome:</label>
                <br />

                <input type="text"
                    value={nome}
                    onChange={(e) => {
                        setNome(e.target.value)
                        setForm(false)
                    }}
                    placeholder="Digite seu nome"
                />
                <br />

                <label>Email:</label>
                <br />
                <input type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        setForm(false)
                    }
                    }
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