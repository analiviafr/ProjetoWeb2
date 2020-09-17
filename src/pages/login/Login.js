import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import axios from 'axios';
import Search from '../search/Search';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(['']);
  const [flag, setFlag] = useState('');

  async function onLoginSubmit(e) {
    e.preventDefault();
    if(!email){
      setError('E-mail inválido');
      return;
    }
    if(!password){
      setError('Senha inválida');
      return;
    }


    try {
      const res = await axios.post('https://reqres.in/api/login', {"email": email,"password": password});
      localStorage.setItem('app-token', res.data.token);
      setError('');
      setFlag(localStorage.getItem('app-token'));
      window.alert("Login realizado com sucesso!");
      //history.push('/search');
      window.location = 'ProjetoWeb2/search';
    } catch{
      setError('Endereço de email ou senha inválido.');
      return;
    }
  }

  useEffect(() => {
    setFlag(localStorage.getItem('app-token'));
  },[])


  return (
    <div className="Login-app">
      <h1>Login</h1>
      <form onSubmit={onLoginSubmit}>

        <input id="email" type="email" value={email} placeholder="Digite seu e-mail" onChange={e => setEmail(e.target.value)}/>
        <br/>

        <input id="password" type="password" value={password} placeholder="Digite sua senha" onChange={e => setPassword(e.target.value)}/>
        <br/>

        <Link to="/ProjetoWeb2/"><button className="Voltar-btn">Voltar</button></Link>
        <button className="Login-btn" type="submit">Entrar</button>
        </form>

        {error&&<span  className="Login-error">{error}</span>}
    </div>
  );
}