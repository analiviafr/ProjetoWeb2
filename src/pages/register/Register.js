import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {history} from '../../history';

import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function onRegisterSubmit(e) {
    e.preventDefault();
    if(!email){
      setError('E-mail inválido.');
      return
    }
    if(!password){
      setError('Senha inválida.');
      return
    }
    try {
      const token = await axios.post('https://reqres.in/api/register', {"email": email, "password": password});
      window.alert("Cadastro realizado com sucesso! Realize seu login.");
      history.push('/login')
    } catch{
      setError('E-mail ou senha inválido.');
      return
    }
  }

  return (
    <div className="Register">
    <h1>Cadastro</h1>
    <form onSubmit={onRegisterSubmit}>

      <input id="email" type="email" value={email} placeholder="Digite seu e-mail" onChange={e => setEmail(e.target.value)}/>
      <br/>

      <input id="password" type="password" value={password} placeholder="Digite sua senha" onChange={e => setPassword(e.target.value)}/>
      <br/>

      <Link to="/"><button className="Voltar-btn">Voltar</button></Link>
      <button className="Login-btn" type="submit">Cadastrar</button>
      </form>

      {error&&<span  className="Login-error">{error}</span>}
    </div>
  );
}

export default Register;
