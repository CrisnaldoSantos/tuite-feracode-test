import React, {useState} from 'react';
import {Input, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../store/fetchActions';
import swal from '../../util/swalert';
import logoImg from'../../assets/twitter.svg';

import './style.css';

export default function Register(){

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [repassword,setRepassword] = useState('');

    const dispatch = useDispatch();
    const loading = useSelector(state => state.load.loading)

    async function handleRegister(e){
        e.preventDefault();

        if(password !== repassword || username==='' || email==='' || password===''){
            swal('info','Campos Inválidos','Verifique os campos e tente novamente!');
        }else{
            const data = {
                username,email,password
            }
            dispatch(register(data));
        }
    }
    
    return(
        <div className="register-wrapper">
            <img src={logoImg} alt="Twitter Logo" />
            <form onSubmit={handleRegister}>
                <h1>Registre-se no tuite</h1>
                <Input placeholder="E-mail" value={email} onChange={e=> setEmail(e.target.value)}/>
                <Input placeholder="Nome de usuário" value={username} onChange={e=> setUsername(e.target.value)} autoComplete="disabled"/>
                <Input placeholder="Digite uma senha" value={password} onChange={e=> setPassword(e.target.value)} type="password" />
                <Input placeholder="Confirme sua senha" value={repassword} onChange={e=> setRepassword(e.target.value)} type="password" />
                
                <Button className="button" type="submit"disabled={loading}>{loading?"Registrando..":"Registrar"}</Button>
                <div className="links">
                    <Link to="/login">
                        Já possuo registro no Tuite
                    </Link>
                </div>
            </form>
        </div>
    );
}