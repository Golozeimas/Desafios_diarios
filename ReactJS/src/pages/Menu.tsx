import { Link } from "react-router-dom";


function Menu(){

    return(
        <div>
            <h1>Menu</h1>
            <ul>
                {/* Link parecido com a tag <a> do HTML, porem mais leve */}
                <Link to={"inicio"}>Inicio</Link>
                <br />
                <Link to={"sobre"}>Sobre</Link>
                <br />
                <Link to={"contato"}>Contato</Link>
            </ul>
        </div>
    )

}

export default Menu;