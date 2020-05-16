import React from 'react';
import {Input, Button, Label} from 'reactstrap';
import Navbar from '../../components/Navbar';
import './style.css';

export default function Register(){
    
    return(
        <>
        <Navbar/>
        <div className="settings-wrapper">
            <form>
                <h1>Edite seu perfil</h1>
                <Label>Escolha uma foto para o perfil:</Label>
                <Input type="file"/>
                <Label>Escolha uma foto para a capa:</Label>
                <Input type="file"/>
                
                <Button className="button" type="submit">Salvar</Button>
            </form>
        </div>
        </>
    );
}