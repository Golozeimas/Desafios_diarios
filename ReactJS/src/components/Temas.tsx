import { useState, useEffect } from "react";

function Temas(){
    const [tema,setTema] = useState(()=> localStorage.getItem('tema') ?? "#FFFFFF")

    useEffect(()=>{
        function guardarTema(): void{ 
            localStorage.setItem("tema", tema)
            
            switch(localStorage.getItem("tema")){
                case "#000000":
                    document.body.style.backgroundColor = "#000000"
                    break
                case "#FFFFFF":
                    document.body.style.backgroundColor = "#FFFFFF"
                    break
            }
        }

        guardarTema()
    },[tema])

    function changeTheme(): void{
        if(tema === "#FFFFFF"){
            document.body.style.backgroundColor = "#000000"
            setTema("#000000")
        }else{
            document.body.style.backgroundColor = "#FFFFFF"
            setTema("#FFFFFF")
        }
    }

    return(
        <div>
            <button onClick={changeTheme}>Troca de tema</button>
        </div>
    )

}

export default Temas;