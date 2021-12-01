import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Formulary() {
  const [formulary, setFormulary] = useState({
    name: '',
    birthdate: '',
    cpf: '',
    cep: '',
  })
  const [cepData, setCepData] = useState('');

  const fetchCEP = async (cep) => {
    try {
      if (formulary.cep.length === 8) {
        const fetchData = await axios.get(`https://viacep.com.br/ws/77020468/json/`)
        console.log(fetchData)
        return setCepData(fetchData.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCEP()
  }, [formulary.cep])
  

  const handleChange = ({target}) => {
    setFormulary({
      ...formulary,
      [target.name]: target.value
    })
  }

  const setLocalStorage = () => {
    const userObj = {
      name: formulary.name,
      birthdate: formulary.birthdate,
      cpf: formulary.cpf,
      cep: formulary.cep,
      neighborhood: cepData.bairro,
      city: cepData.localidade,
      state: cepData.uf,
      street: cepData.logradouro,
    }
    if (!localStorage.userList) {
      localStorage.setItem('userList', JSON.stringify([userObj]))
      return 
    }
    const localObj = JSON.parse(localStorage.getItem('userList'))
    let result = [...localObj, userObj]
    localStorage.setItem('userList', JSON.stringify(result))
  }

  const clearForm = () => {
    setFormulary({
      name: '',
      birthdate: '',
      cpf: '',
      cep: '',
    })
    setCepData({
      bairro: '',
      localidade: '',
      uf: '',
      logradouro: '',
    })
  }

  return (
    <div className="formulary-container">
      <form>
        <label>
          Fullname
          <input type="text" name="name" onChange={(e) => handleChange(e)} value={formulary.name} />
        </label>
        <label>
          Birthdate
          <input type="date" name="birthdate" onChange={(e) => handleChange(e)} value={formulary.birthdate} />
        </label>
        <label>
          CPF
          <input type="number" name="cpf" onChange={(e) => handleChange(e)} value={formulary.cpf} />
        </label>
        <label>
          CEP
          <input type="number" name="cep" onChange={(e) => handleChange(e)} maxLength='8' value={formulary.cep} />
        </label>
        <label>
        Neighborhood
          <input type="text" name="Neighborhood" value={cepData.bairro}  />
        </label>
        <label>
        City
          <input type="text" name="City" value={cepData.localidade} />
        </label>
        <label>
        State
          <input type="text" name="State" value={cepData.uf} />
        </label>
        <label>
        Street
          <input type="text" name="Street" value={cepData.logradouro} />
        </label>
      </form>
      <button type="button" onClick={() => {
        setLocalStorage()
        clearForm()
      }}>Register</button>
    </div>
  )
}
