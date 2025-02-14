import './header.css';
import Logo from '../../img/logo.png';
import Lupa from '../../img/lupa.png';
import amais from '../../img/a+.png';
import amenos from '../../img/a-.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function fontSize(operacao) {
    const elementos = document.querySelectorAll("*");

    elementos.forEach(elemento => {
        let tamanhoAtual = window.getComputedStyle(elemento).fontSize;
        let tamanhoNumero = parseFloat(tamanhoAtual);

        if (operacao === '+') {
            tamanhoNumero += 2;
        } else if (operacao === '-') {
            tamanhoNumero -= 2;
        }

        elemento.style.fontSize = tamanhoNumero + "px";
    });
}

export default function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault(); 
        if (searchTerm.trim()) {
            navigate(`/cursos?search=${searchTerm}`);
            setSearchTerm(''); 
        }
    };

    const handleCategoryClick = (category) => {
        navigate(`/cursos?category=${category}`);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="logo">
                    <Link to={'/'}><img src={Logo} alt="Logo da empresa" title="Logo Library"/></Link>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menuDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/'}>Início</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="categories" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Cursos
                            </a>
                            <div className="dropdown-menu" aria-labelledby="categories">
                                <button className="dropdown-item" onClick={() => handleCategoryClick('Programação')}>Programação</button>
                                <button className="dropdown-item" onClick={() => handleCategoryClick('Design')}>Design</button>
                                <button className="dropdown-item" onClick={() => handleCategoryClick('Marketing')}>Marketing</button>
                            </div>
                        </li>
                    </ul>
                    <div className="search">
                        <form onSubmit={handleSearch}>
                            <label htmlFor="search" hidden>Buscar</label>
                            <input
                                type="text"
                                name="search"
                                placeholder="Buscar"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleSearch(e); 
                                }}
                            />
                            <button type="submit"><img src={Lupa} alt="Lupa" title="Buscar" /></button>
                        </form>
                    </div>
                    <div className="fontSizeAss">
                        <button onClick={() => fontSize('+')}><img src={amais} alt="Aumentar fonte" title="A+" /></button>
                        <button onClick={() => fontSize('-')}><img src={amenos} alt="Diminuir fonte" title="A-" /></button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
