import React, {useState} from 'react';
import {Input, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import logoImg from'../../assets/twitter.svg';

import './style.css';

export default function Logon(){

    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    
    return(
        <div className="login-wrapper">
            <img src={logoImg} alt="Twitter Logo" />
            <form>
                <h1>Entrar no tuite</h1>
                <Input placeholder="Nome de usuário" value={user} onChange={e=> setUser(e.target.value)}/>
                <Input placeholder="Senha" value={password} onChange={e=> setPassword(e.target.value)} type="password" />
                <Button className="button" type="submit">Entrar</Button>
                <div className="links">
                    <Link to="/register">
                        <spam>Inscreva-se no Tuite</spam>
                    </Link>
                </div>
            </form>
        </div>
    );
}