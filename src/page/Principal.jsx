import "./principal.css";
import TextoDestacado from "../components/TextoDestacado";
import TextoPrincipal from "../components/TextoPrincipal";
import TextoDescricao from "../components/TextoDescricao";
import Botao from "../components/Botao";

export default function Principal() { 
  function redirecionar() {
    window.location.href = "#contato";
  }
 
  return (
    <section id= "principal">
      <TextoDestacado texto={"Olá, meu nome é:"}></TextoDestacado>
      <TextoPrincipal texto={"Alison Moreira"}></TextoPrincipal>
     <TextoDescricao 
  texto={
    "Tenho 16 anos, sou Aluno do Ensino Médio Técnico em Informática para Internet da Escola Marista Social Cascavel,\ne este portfólio foi desenvolvido durante uma aula de introdução de como criar um Portfólio."
  }
/>

      <Botao texto={"Contato"} funcaoClick={redirecionar}></Botao>

    </section >
  );
}