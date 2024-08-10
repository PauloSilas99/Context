import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import './styles/Produto.css'
const Produto = ()=>{
    const global = useContext(GlobalContext)
    if(global.dados === null) return "Sem dados";
    return (
        <div className="corpo">
            {global.dados.map((produto)=> (
                <div key={produto.id} className="divProdut">
                    <div>
                        <p style={{fontWeight:'bold'}}>{produto.nome}</p>
                        <img className="img" src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
                    </div>
                    <div className="info">
                    <span>{produto.fotos[0].titulo}</span>
                    <span className="preco">R$ {produto.preco}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Produto;