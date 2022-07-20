import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import api from './services/api';

import './styles/app.sass';

function App() {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})
  
  async function handleSearch() {

    if (input === '') {
      alert("Digite um CEP válido")
    } else if (input.length > 8 || input.length < 8) {
      alert("Digite um CEP válido")
      
      return;
    }
    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("")

    } catch (error) {
      alert("Erro ao buscar o CEP")
      setInput("")
      
    }
 }

  return (
    <div className="container">
      <h1 className='title'>Busca CEP</h1>
      <div className='containerInput'>
        <input
          type='text'
          placeholder='Digite seu CEP...'
          value={input}
          onChange={(e) => setInput(e.target.value)}/>
        
        <button className='buttonSearch' onClick={handleSearch}>
          <FiSearch  size={25} color='#dacece'
          />
        </button>

      </div>

        <main className='main'>
        <h2>CEP: {cep.cep }</h2>
        <spam>Rua:{ cep.logradouro }</spam>
        <spam>Complemento:{cep.complemento }</spam>
        <spam>Bairro:{ cep.bairro }</spam>
        <spam>{cep.localidade} - { cep.uf }</spam>
        </main>
    </div>
  );
}

export default App;
