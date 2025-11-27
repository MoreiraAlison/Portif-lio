export default function Botao({ texto, funcaoClick }) {
    
    return (
        <button onClick={funcaoClick}>
     
            {texto}
        </button>
    );
}