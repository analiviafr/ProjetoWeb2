import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Formik, Form, Field} from 'formik';
import axios from 'axios';

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
        } catch{
            setError('Endereço de email ou senha inválido.');
            return;
        }
    }

    useEffect(() => {
        setFlag(localStorage.getItem('app-token'));
    },[])

    return (
        <div className="Login">
          <h1>Login</h1>
          <Link to="/" className="Voltar-btn" >Voltar</Link>

          <form onSubmit={onLoginSubmit}>
            <label htmlFor="email">E-mail:</label>
            <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="password">Senha: </label>
            <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button className="Login-btn" type="submit">Entrar</button>
          </form>

          {error&&<span  className="Login-error">{error}</span>}
        </div>
    );
}
