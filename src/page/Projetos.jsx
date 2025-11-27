import CardProjetos from "../components/CardProjetos";
import TextoMeusProjetos from "../components/TextoMeusProjetos";
import "./projetos.css";

export default function Projetos() {
    return (
        <section id="projetos">
            <TextoMeusProjetos texto={"Meus Projetos"} />

            <div className="cards-container">

                <CardProjetos 
                    className="card-horizontal"
                    descricao="Marista News é um jornal fictício, criado durante uma aula de Web Design para testar nossa criatividade."
                    link="https://www.figma.com/proto/8uxEdOxvwwS49IEXm6COAf/Untitled?node-id=8-32"
                    imagem="/maristanews.png"
                    titulo="Marista News"
                />

            
                <CardProjetos 
                    titulo="Mente Aberta"
                    className="card-horizontal"
                    descricao="O app Mente Aberta é um projeto fictício também criado em uma aula de Web Design voltado à saúde mental."
                    link="https://www.figma.com/proto/hkEwAkbOsSOxl4gfMqqyWK/Untitled"
                    imagem="/mente aberta.png"
                />

            
                <CardProjetos
                    titulo="Agendamento de Atendimento"
                    className="card-vertical"
                    descricao="Um protótipo de site de agendamento de atendimentos para uso na escola, que será aprimorado por mim e meu grupo no projeto integrador do 3º ano."
                    link="https://www.figma.com/proto/lg13rcqMFqv6Bk9r8rha9v/Untitled"
                    imagem="/agendamento.png"
                />

            </div>
        </section>
    );
}
