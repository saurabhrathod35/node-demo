var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const PERMISSION = mongoose.Schema({
    role: String,
    user:{ type: Schema.Types.ObjectId, ref: 'user' }
},{
    timestamps:true
});

module.exports = mongoose.model('permissions', PERMISSION)