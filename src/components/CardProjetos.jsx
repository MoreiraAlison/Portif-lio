export default function CardProjetos({imagem, alt, titulo, descricao, link}) {
    return (
        <div className="Card-Projetos-Container">
            <img src={imagem} alt={alt} className="Card-Projetos-Imagem" />
            <h3 className="Card-Projetos-Titulo">{titulo}</h3>
            <p className="Card-Projetos-Descricao">{descricao}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="Card-Projetos-Link">
                Ver Projeto
            </a>
        </div>
    );
}