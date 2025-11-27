import "./SobreMim.css";
import TextoSobreMim from "../components/TextoSobreMim";
import TextoSobreEu from "../components/TextoSobreEu";  
export default function SobreMim() {
    return (
        <section className="SobreMim-Container" id="sobre">
            <TextoSobreEu texto={"Um pouco sobre mim"}/>
            <TextoSobreMim
                texto={
                    "Sou um estudante dedicado e curioso. Atualmente curso o Ensino Médio Técnico na Escola Marista Social Cascavel, onde tenho explorado a área de programação e design digital. Além da tecnologia, também me interesso por design. Acredito que a combinação entre técnica e imaginação é o que torna qualquer projeto realmente especial."
                }/>        
            
        </section>
    );
}