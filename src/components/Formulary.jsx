import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { cpf } from 'cpf-cnpj-validator'; 
import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useCookies } from 'react-cookie';

export default function Formulary() {
  const [formulary, setFormulary] = useState({
    name: '',
    birthdate: '',
    cpf: '',
    cep: '',
  })

  const [cepData, setCepData] = useState('');

  const [cookies, setCookie] = useCookies([`${formulary.name}`])

  const setCookies = (obj) => {
    setCookie(`${formulary.name}`, JSON.stringify(obj), { path: '/register' })
  }

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

  const validateFields = () => {
    if (formulary.cpf.length !== 11 || !cpf.isValid(formulary.cpf)) {
      setFormulary({
        ...formulary,
        cpf: '',
      })
      return false
    }
    if (formulary.name.length === 0) return false
    if (formulary.birthdate.length === 0) return false
    if (formulary.cep.length === 0) return false
    return true
  }

  const setLocalStorage = () => {
    if (!validateFields()) return alert('Insert all required fields')
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
    setCookies(userObj)
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
    <div className="register-div">
      <div className="health-img">
      </div>
      <div className="formulary-container">
      <form>
        <div className="mb-3">
          <label className="form-label" for="name">
            Fullname
            <input className="form-control" id="name" type="text" name="name" onChange={(e) => handleChange(e)} value={formulary.name} required />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" for="birthdate">
            Birthdate
            <input className="form-control" id="birthdate" type="date" name="birthdate" onChange={(e) => handleChange(e)} value={formulary.birthdate} required />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" for="cpf">
            CPF
            <input className="form-control" id="cpf" type="text" name="cpf" onChange={(e) => handleChange(e)} value={formulary.cpf} maxLength="11" required />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" for="cep">
            CEP
            <input className="form-control" id="cep" type="text" name="cep" onChange={(e) => handleChange(e)} maxLength='8' value={formulary.cep} required />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" for="neighborhood">
          Neighborhood
            <input className="form-control" id="neighborhood" type="text" name="neighborhood" value={cepData.bairro} required  />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" for="city">
          City
            <input className="form-control" id="city" type="text" name="city" value={cepData.localidade} required />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" for="state">
          State
            <input className="form-control" id="state" type="text" name="state" value={cepData.uf} required />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" for="street">
          Street
            <input className="form-control" id="street" type="text" name="street" value={cepData.logradouro} required />
          </label>
        </div>
      </form>
      <button type="submit" onClick={() => {
        setLocalStorage()
        clearForm()
      }}>Register</button>
      <br />
      <Link to="/"><BsFillArrowLeftCircleFill /></Link>
    </div>
    </div>
  )
}
