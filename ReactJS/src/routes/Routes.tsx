import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'
import Menu from '../pages/Menu'

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/inicio"  element={<Home/>} />
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/contato" element={<Contato/>} />
                <Route path="/" element={<Menu/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;