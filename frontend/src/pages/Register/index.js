import React, {useState} from 'react';
import {Input, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import logoImg from'../../assets/twitter.svg';

import './style.css';

export default function Register(){

    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    
    return(
        <div className="register-wrapper">
            <img src={logoImg} alt="Twitter Logo" />
            <form>
                <h1>Registre-se no tuite</h1>
                <Input placeholder="E-mail" value={user} onChange={e=> setUser(e.target.value)}/>
                <Input placeholder="Nome de usuário" value={user} onChange={e=> setUser(e.target.value)} autoComplete="disabled"/>
                <Input placeholder="Digite uma senha" value={password} onChange={e=> setPassword(e.target.value)} type="password" />
                <Input placeholder="Confirme sua senha" value={password} onChange={e=> setPassword(e.target.value)} type="password" />
                
                <Button className="button" type="submit">Registrar</Button>
                <div className="links">
                    <Link to="/">
                        <spam>Já possuo registro no Tuite</spam>
                    </Link>
                </div>
            </form>
        </div>
    );
}