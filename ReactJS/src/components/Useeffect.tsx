import { useState } from "react";
import { useEffect } from "react";


function UsoDeUserEffect(){

    const [contador, setContador] = useState(0)
    
    useEffect(() => {
        function mudarAbaDoSite(){
            document.title = `Contador: ${contador}`
        }

        mudarAbaDoSite();
    }, [contador])
    

    function handleAumenta(){
        setContador(contador + 1)
    }
    function handleDiminui(){
        setContador(contador - 1)
    }

    return(
        <div>
            <p>Contador: {contador}</p>
            <button onClick={handleAumenta}>Aumenta contador</button>
            <button onClick={handleDiminui} disabled={contador === 0}>Diminui contador</button>
            <button onClick={() => setContador(0)} disabled={contador === 0}>Zera contador</button>
        </div>
    )
}


export default UsoDeUserEffect;
