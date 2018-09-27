var mongoose = require('mongoose');
const env = require('./env/development.env');

module.exports = mongoose.connect(env.connection, { useNewUrlParser: true }).then(() => {
    console.log('connected');
}).catch(err => {
    console.log('fail to connect');
    process.exit();
});