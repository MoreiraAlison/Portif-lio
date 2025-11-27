import TextoContato from "../components/TextoContato";
import "./Contato.css";

export default function Contato() {
  function enviar(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  }

  return (
    <section id="contato">
      <div className="contato-container">
        <form className="form-contato" onSubmit={enviar}>
          <h2>Entre em Contato</h2>

          <div className="form-grupo">
            <label>Nome</label>
            <input type="text" placeholder="Seu nome" required />
          </div>

          <div className="form-grupo">
            <label>E-mail</label>
            <input type="email" placeholder="Seu e-mail" required />
          </div>

          <div className="form-grupo">
            <label>Mensagem</label>
            <textarea placeholder="Digite sua mensagem" rows="5" required></textarea>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>

      <div className="info-contato">
        <TextoContato texto="" />
        <TextoContato texto="✉️ E-mail: alisonmoreira070@gmail.com" />
        <TextoContato texto="📱 Telefone: (45) 99942-4877" />
      </div>
    </section>
  );
}
