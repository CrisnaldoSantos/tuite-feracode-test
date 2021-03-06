const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Tweet = require('../models/tweet');
const router = express.Router();
router.use(authMiddleware);

router.get('/', async (req,res)=>{
    try{
        const {page, author_id}=req.query;
        const tweet = await Tweet.paginate({author_id:author_id}, {page:parseInt(page), limit: 5, sort:{createdAt: 'desc'}});
        return res.send(tweet);
    }catch{
        return res.status(400).send({error: 'Error loading tweets'});
    }
});

router.post('/',async (req,res)=>{
    try{
        const tweet = await Tweet.create(req.body);
        return res.send({tweet});
    }catch{
        return res.status(400).send({error: 'Error creating new tweet'});
    }
});

router.delete('/:tweetId', async (req,res)=>{
    try{
        const advisor = await Advisor.findById(req.params.advisorId);
        if(!advisor)
            return res.status(404).send({error: 'Tweet not found'});
        await Advisor.remove(advisor);
        return res.status(200).send();
    }catch{
        return res.status(400).send({error: 'Error deleting tweet'});
    }
});

module.exports = app => app.use('/tweet',router);
