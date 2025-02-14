import './listagem.css';
import cursos from '../../json/cursos.json';
import { Link, useLocation } from 'react-router-dom';
import NaoEncontrada from '../../paginas/naoEncontrada';
import { useState, useEffect } from 'react';
import Banner from '../banner';

export default function Listagem() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const searchTerm = params.get('search')?.toLowerCase() || '';
    const category = params.get('category') || '';

    const [order, setOrder] = useState('asc');
    const [cursosFiltrados, setCursosFiltrados] = useState([]);

    useEffect(() => {
        let filtrados = cursos;

        if (searchTerm) {
            filtrados = filtrados.filter((curso) =>
                curso.name.toLowerCase().includes(searchTerm)
            );
        }

        if (category) {
            filtrados = filtrados.filter((curso) => curso.category === category);
        }

        filtrados = [...filtrados].sort((a, b) => {
            return order === 'asc' ? a.duration - b.duration : b.duration - a.duration;
        });

        setCursosFiltrados(filtrados);
    }, [searchTerm, category, order]);

    if (cursosFiltrados.length === 0) {
        return <NaoEncontrada />;
    }

    return (
        <div className="cursos">
            <Banner text={category ? `Cursos de ${category}` : 'Cursos Disponíveis'} />

            <div className="container-menu">
                <div className="filtros">
                    <label htmlFor="ordenar">Ordenar Por:</label>
                    <select id="ordenar" className='form-select' value={order} onChange={(e) => setOrder(e.target.value)}>
                        <option value="asc">Menor Duração</option>
                        <option value="desc">Maior Duração</option>
                    </select>
                </div>
            </div>

            <div className="cards">
                {cursosFiltrados.map((curso) => (
                    <Link to={`/detalhe/${curso.id}`} key={curso.id} className="card-link">
                        <div className='card-curso'>
                            <div className="image">
                                <img src={curso.image} alt={curso.name}/>
                            </div>
                            <div className="card-curso-content">
                                <div className="id">ID: <span>{curso.id}</span></div>
                                <div className="category">Categoria: <span>{curso.category}</span></div>
                                <div className="name">{curso.name}</div>
                                <div className="description">{curso.description}</div>
                                <div className="duration">Duração: <span>{curso.duration} horas</span></div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
