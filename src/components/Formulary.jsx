import React, { useState, useEffect } from 'react';


export default function Formulary() {
  const [formulary, setFormulary] = useState({
    nome: '',
    nascimento: '',
    cpf: '',
    cep: '',
    // bairro: '',
    // cidade: '',
    // estado: '',
    // logradouro: ''
  })
  // const [cepData, setCepData] = useState('');

  
  // const fetchCEP = async (cep) => {
  //   const fetchData = await fetch(`http://correiosapi.apphb.com/cep/${cep}`)
  //   const res = fetchData.json()
  //   return setCepData(res)
  // }

  const handleChange = ({target}) => {
    setFormulary({
      ...formulary,
      [target.name]: target.value
    })
  }

  return (
    <div className="formulary-container">
      <form>
        <label>
          Nome completo
          <input type="text" name="nome" onChange={(e) => handleChange(e)} />
        </label>
        <label>
          Data de nascimento
          <input type="date" name="nascimento" onChange={(e) => handleChange(e)} />
        </label>
        <label>
          CPF
          <input type="number" name="cpf" onChange={(e) => handleChange(e)} />
        </label>
        <label>
          CEP
          <input type="number" name="cep" onChange={(e) => handleChange(e)} />
        </label>
        <label>
        bairro
          <input type="text" name="bairro" onChange={(e) => handleChange(e)} />
        </label>
        <label>
        cidade
          <input type="text" name="cidade" onChange={(e) => handleChange(e)} />
        </label>
        <label>
        estado
          <input type="text" name="estado" onChange={(e) => handleChange(e)} />
        </label>
        <label>
        logradouro
          <input type="text" name="logradouro" onChange={(e) => handleChange(e)} />
        </label>
      </form>
    </div>
  )
}
