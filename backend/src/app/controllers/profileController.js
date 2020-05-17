const express = require('express');
const authMiddleware = require('../middlewares/auth');
const AzureStorage = require('../middlewares/azureMulter');

const User = require('../models/user');
const router = express.Router();
router.use(authMiddleware);



router.get('/:userId', AzureStorage.any(), async (req,res)=>{
    try{
        const user = await User.findById(req.params.userId);
        if(!user)
            return res.status(404).send({error: 'Usuário não encontrado'});
        return res.send({user});
    }catch{
        return res.status(400).send({error: 'Error ao carregar usuário!'});
    }
});

router.put('/:userId', AzureStorage.any(), async (req,res)=>{
    try{
        if(req.files.length===0){
            return res.status(400).send({error: 'É necessário utilizar ao menos um dos campos para atualizar o perfil!'});
        }
        if(req.files.length===1){
            if(req.files[0].fieldname==="picture_url"){
                const data ={
                    picture_url:req.files[0].url,
                }
                const user = await User.findByIdAndUpdate(req.params.userId,
                    data,{new:true});
                return res.send({user});
            }else{
                const data ={
                    folder_url:req.files[0].url,
                }
                const user = await User.findByIdAndUpdate(req.params.userId,
                    data,{new:true});
                return res.send({user});
            }

        }else{
            const data ={
                picture_url:req.files[0].url,
                folder_url:req.files[1].url,
            }
            const user = await User.findByIdAndUpdate(req.params.userId,
                data,{new:true});
            return res.send({user});
        }
        
    }catch{
        return res.status(400).send({error: 'Erro ao atualizar o perfil!'});
    }
});

module.exports = app => app.use('/user',router);
