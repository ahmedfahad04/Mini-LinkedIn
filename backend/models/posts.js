const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new Schema({
    u_id: {type: String},
    name: {type: String},
    content: {type: String},
    image: {type: String},
    timestamp: {type: String},
}, {timestamps: true});

const post = mongoose.model("Post", postSchema);
module.exports = post;