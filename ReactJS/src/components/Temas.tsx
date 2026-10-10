import { useState, useEffect } from "react";

function Temas(){
    const [tema,setTema] = useState(
        ()=> localStorage.getItem('tema') ?? "#FFFFFF"
    )

    useEffect(()=>{
        function guardarTema(): void{ 
            localStorage.setItem("tema", tema)
            if(localStorage.getItem("tema") === "#000000"){
                document.body.style.backgroundColor = "#000000"
            }else if(localStorage.getItem("tema") === "#FFFFFF"){
                document.body.style.backgroundColor = "#FFFFFF"
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