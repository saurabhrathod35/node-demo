var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const USER = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    peremissions : [{ type: Schema.Types.ObjectId, ref: 'permissions' }]
},{
    timestamps:true
})

module.exports = mongoose.model('user',USER);