const mongoose = require('../../database');
const mongoosePaginate = require('mongoose-paginate');

const TweetSchema = new mongoose.Schema({
    author_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    author_name:{
        type: String
    },
    content:{
        type:String,
        require:true,
    },
    createdAt:{
        type:Date,
        default: Date.now,
    },
});
TweetSchema.plugin(mongoosePaginate);
const Tweet = mongoose.model('Tweet', TweetSchema);

module.exports = Tweet;