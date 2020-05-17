import React, {useState} from 'react';
import {Input, Button} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import {authLogin} from '../../store/fetchActions'
import {Link} from 'react-router-dom';
import logoImg from'../../assets/twitter.svg';

import './style.css';

export default function Logon(){

    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const loading = useSelector(state => state.load.loading)
    async function handleLogin(e){
        e.preventDefault();
        const data = {
            username:user,password
        }
        dispatch(authLogin(data));
    }
    
    return(
        <div className="login-wrapper">
            <img src={logoImg} alt="Twitter Logo" />
            <form onSubmit={handleLogin}>
                <h1>Entrar no tuite</h1>
                <Input placeholder="Nome de Usuário: @user" value={user} onChange={e=> setUser(e.target.value)}/>
                <Input placeholder="Senha" value={password} onChange={e=> setPassword(e.target.value)} type="password" />
                <Button className="button" type="submit" disabled={loading}>{loading?"Entrando..":"Entrar"}</Button>
                <div className="links">
                    <Link to="/register">
                        Inscreva-se no Tuite
                    </Link>
                </div>
            </form>
        </div>
    );
}