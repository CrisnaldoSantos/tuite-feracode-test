import React, {useState} from 'react';
import {Input, Button, Label} from 'reactstrap';
import Navbar from '../../components/Navbar';
import {useDispatch, useSelector} from 'react-redux';
import {updateProfile} from '../../store/fetchActions'
import './style.css';

export default function Register(){
    const [picture_url,setPicture_url] = useState('');
    const [folder_url,setFolder_url] = useState('');

    const dispatch = useDispatch();
    const loading = useSelector(state => state.load.loading)

    function onChangePicture(event){
        let file = event.target.files[0];
        setPicture_url(file);
    }

    function onChangeFolder(event){
        let file = event.target.files[0];
        setFolder_url(file);
    }

    function handleSubmit(e){
        e.preventDefault();
        const data = new FormData();
        if (picture_url !== '')
            data.append('picture_url',picture_url);
        if (folder_url !== '')
            data.append('folder_url',folder_url);
        dispatch(updateProfile(data))
        
    }
    return(
        <>
        <Navbar/>
        <div className="settings-wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Edite seu perfil</h1>
                <Label>Escolha uma foto para o perfil:</Label>
                <Input type="file" onChange={e=>onChangePicture(e)}/>
                <Label>Escolha uma foto para a capa:</Label>
                <Input type="file" onChange={e=>onChangeFolder(e)}/>
                
                <Button className="button" type="submit" disabled={loading}>{loading?"Salvando..":"Salvar"}</Button>
            </form>
        </div>
        </>
    );
}