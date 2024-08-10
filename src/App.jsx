import { GlobalStorage } from './GlobalContext'
import './App.css'
import Produto from './Produto'
import Aleatorio from './Aleatorio'
function App() {
 

  return (
    <GlobalStorage>
      <span className='titulo'>Produtos em Estoque:</span>
      <Produto />
      
    </GlobalStorage>
  )
}

export default App
