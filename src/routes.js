import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Inicio from "./paginas/inicio";
import Listagem from "./components/listagem"; 
import Detalhe from "./paginas/detalhe";
import NaoEncontrada from "./paginas/naoEncontrada";
import './tema.css';

function AppRoutes() {
    return (
        <div className="container">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Inicio />} />
                    <Route path="cursos" element={<Listagem />} /> {/* Adicionada rota para Listagem */}
                    <Route path="detalhe/:id/*" element={<Detalhe />} />
                    <Route path="*" element={<NaoEncontrada />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default AppRoutes;
