import { Link } from 'react-router-dom';
import Banner from '../../components/banner';
import './naoEncontrada.css';

export default function NaoEncontrada(){
    return(
        <>
        <Banner text={'Página não encontrada'}/>
        <h2>Desculpe, algo deu errado.</h2>
        <Link to={'/'}>Voltar</Link>
        
        </>

        
    )
}