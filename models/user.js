const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});



// id: 'u1',
// name: 'Max Schwarz',
// email: 'test@test.com',
// password: 'testers'

userSchema.plugin(uniqueValidator);
const user = mongoose.model('user', userSchema);
module.exports = user;