import { FiSearch } from 'react-icons/fi'

import './styles/app.sass';

function App() {
  return (
    <div className="container">
      <h1 className='title'>Busca CEP</h1>
      <div className='containerInput'>
        <input
          type='text'
          placeholder='Digite seu CEP...' />
        
        <button className='buttonSearch'>
          <FiSearch size={25} color='#FFF' />
        </button>

      </div>

        <main className='main'>
          <h2>CEP: 00000-000</h2>
          <spam>Rua: Teste algum</spam>
          <spam>Complemento: Teste complemento</spam>
          <spam>Bairro: Teste</spam>
          <spam>Belém - PA</spam>
        </main>
    </div>
  );
}

export default App;
