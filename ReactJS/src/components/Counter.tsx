import { useState } from "react";

function Contador(){
    const [count, setCount] = useState(0)

    function incrementa(){
        setCount(count + 1)
    }

    function decrementa(){
        if(count === 0){
            alert("contador não pode ficar abaixo de zero")
            return
        }
        setCount(count - 1)
    }

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={incrementa}> Incrementa </button>
            <button onClick={decrementa} disabled={count === 0}> Decrementar </button>
            <button onClick={()=>{setCount(0)}}> Zerar </button>
        </div>
    )


}

export default Contador;