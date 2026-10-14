import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'
import Menu from '../pages/Menu'
import Erro404 from "../pages/404";
import Produtos from "../pages/produtos";
import ListaProdutos from "../pages/ListaProdutos";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu/>} />
                <Route path="/inicio"  element={<Home/>} />
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/contato" element={<Contato/>} />
                <Route path="/produtos" element={<ListaProdutos/>} />
                <Route path="/produtos/:id" element={<Produtos/>} />
                <Route path="*" element={<Erro404/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;