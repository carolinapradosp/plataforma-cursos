import { Link, useParams } from 'react-router-dom';
import './detalhe.css';
import cursos from '../../json/cursos.json';
import NaoEncontrada from '../naoEncontrada';


export default function Detalhe(){
    const parametros = useParams();

    const detalhe = cursos.find((curso) => {
        return curso.id === Number(parametros.id)
    })

    if(!detalhe){
        return <NaoEncontrada />
    }

    return(
        <main className="detalhe">
        <div className="banner">
            <h1>
                Categoria: {detalhe.category}
            </h1>
        </div>
        <div className="cursos">
            <h2>{detalhe.name}</h2>
            <div className="content">
                <div className="description">
                    <p>
                    {detalhe.description}
                    </p>
                </div>
                <div className="duration">
                    <p>
                        <b>Duração:</b> {detalhe.duration} horas
                    </p>
                </div>
                <div className="grid">
                    <p><b>Grade:</b></p>
                    <ul>
                        {Object.entries(detalhe.grade).map(([aula, conteudo], index) => (
                            <li key={index}>
                                {aula}: {conteudo}
                            </li>
                        ))}
                    </ul>
                </div>
                <Link className='goBack' to={'/'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Voltar</Link>

                
            </div>
           
        </div>
    </main>
    )
}