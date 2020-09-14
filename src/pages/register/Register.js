import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
            alert(token.data.token);
        } catch{
            setError('E-mail ou senha inválido.');
            return
        }
    }

    return (
        <div className="Register">
          <h1>Cadastro</h1>
          <Link to="/" className="Voltar-btn">Voltar</Link>
          <form onSubmit={onRegisterSubmit}>
            <label htmlFor="email">E-mail:</label>
            <input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="password">Senha: </label>
            <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button type="submit">Criar</button>
          </form>
          {error&&<span className="erro-form">{error}</span>}
        </div>
    );
}

export default Register;
