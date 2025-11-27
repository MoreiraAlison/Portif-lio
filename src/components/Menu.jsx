import "./Menu.css";

export default function Menu() {
  return (
    <header>
      <nav className="menu">
        <ul>
          <li><a href="#principal" end>Principal</a></li>
          <li><a href="#sobre">Sobre Mim</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
