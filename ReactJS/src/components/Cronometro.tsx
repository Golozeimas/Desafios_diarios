import { useState, useEffect } from "react";


function Cronometro(){

    const[timer, setTimer] = useState(0)
    const[iniciar, setIniciar] = useState(false)

    useEffect(()=>{
        if(!iniciar) return
        
        const clock = setInterval(() => {
            setTimer((temp)=>temp + 1)
        }, 1000);
    
        return () => clearInterval(clock)
    }, [iniciar])


    function Pausar(){
        setIniciar(false)
    }

    function Zerar(){
        setIniciar(false)
        setTimer(0)      
    }


    return(
        <div>
            <h1>Cronometro: {timer}</h1>
            <button onClick={() => setIniciar(true) }>Iniciar</button>
            <button onClick={()=> Pausar()}>Pausar</button>
            <button onClick={() => Zerar()}>Zerar</button>
        </div>
    )
}


export default Cronometro;