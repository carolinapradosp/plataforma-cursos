import './banner.css';
export default function Banner({text}){
    return(
    <div className="banner">
        <h1>{text ? text : "Plataforma de Cursos Online"}</h1>
    </div>
    )
}