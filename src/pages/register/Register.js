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
            setError('Digite seu email.');
            return
        }
        if(!password){
            setError('Digite sua senha.');
            return
        }
        try {
            const token = await axios.post('https://reqres.in/api/register', {"email": email,
            "password": password});
            alert(token.data.token);
        } catch{
            setError('Cadastro inválido!');
            return
        }
    }


    return (
        <div className="form-user">
            <h1 id="h1criarconta">Criar conta: </h1>
            <Link to="/" className="botao" >Voltar</Link>
            <form onSubmit={onRegisterSubmit}>
                <label htmlFor="email">E-mail: </label>
                <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Senha: </label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Criar</button>
            </form>
            {error&&<span className="erro-form">{error}</span>}
        </div>
    );
}

export default Register;
