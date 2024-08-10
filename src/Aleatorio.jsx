import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";

const Aleatorio = ()=>{
    const global = useContext(GlobalContext)
    if(global.dados === null) return "Sem dados";
    return(
        <div>
            <p>Nome e Valor dos Produtos:</p>
            {global.dados.map((produto)=> (
                <li key={produto.id}>{produto.nome} = {produto.preco}</li>
            ))}
        </div>
    )
}
export default Aleatorio;