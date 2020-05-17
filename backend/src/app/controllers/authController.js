const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

const router = express.Router();

function generateToken(params = {}){
    return jwt.sign(params,authConfig.secret, {expiresIn:28800,});
}


router.post('/register', async (req,res) => {
    const {email, username} = req.body;
    try{
        if (await User.findOne( { email } )){
            return res.status(400).send({ error: 'Email já cadastrado!' });
        }
        if (await User.findOne( { username } )){
            return res.status(400).send({ error: 'Nome de usuário já cadastrado!' });
        }
        var nick = username.substr(0,1);
        if (nick=='@'){
            nick=req.body.username;
        }else{
            nick=`@${req.body.username}`;
        }
        console.log(nick)
        const data = {
            username:nick,
            email:req.body.email,
            picture_url:"https://thumbs.dreamstime.com/b/imagem-do-avatar-perfil-no-fundo-cinzento-142213585.jpg",
            folder_url:"https://i1.wp.com/vilataopontal.com/wp-content/uploads/2017/09/wallpaper-azul-papel-de-parede-azul-fundo-15.jpg?zoom=2.625&fit=2048%2C1280",
            password:req.body.password,
        }
        const user = await User.create(data);
        user.password=undefined;

        return res.send({
            user,
            token: generateToken({id:user._id})
        });
    }catch(err){
        console.log(err)
        return res.status(400).send({error: 'Seu registro falhou!'});
    }
});

router.post('/authenticate', async (req,res) => {
    const {username, password} = req.body;

    const user = await User.findOne({ username }).select('+password');
    if (!user)
        return res.status(400).send({ error: 'Usuário não encontrado!'});
    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Senha inválida!'});
    user.password=undefined;
    
    res.send({ 
        user,
        token: generateToken({id:user.id})
    });
});

module.exports = app => app.use('/auth',router);