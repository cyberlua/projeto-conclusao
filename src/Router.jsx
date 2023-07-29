import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu"
import Footer from "./componentes/Footer";
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Empresas from "./pages/Empresas"
import Contato from "./pages/Contato"
import Cursos from "./pages/Cursos"


const Router = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/empresas" element={<Empresas />} />
                <Route path="/cursos" element={<Cursos />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
            <Footer content="Creative Commons 2023 | Feito com 💜 por cyberlua" />
        </BrowserRouter>
    );
}

export default Router;