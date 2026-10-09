


function UserCard({nome, profissao, cidade}){
    return (
        <div className='card'>
            <h1>Nome: {nome}</h1>
            <h2>Profissão: {profissao}</h2>
            <h3>Cidade: {cidade}</h3>
        </div>
    )
}

export default UserCard