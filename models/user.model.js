const mongoose = require("mongoose");
const {Schema, model} = mongoose;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var validatePassword = function(email) {
    var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    return re.test(email)
};

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validateEmail,
            message: 'Email validation failed'
          }
    },
    password: {
        type:String,
        required: true,
        validate: {
            validator: validatePassword,
            message: 'Password validation failed'
          }
    }
})

const UserModel = model('User', userSchema);

module.exports = UserModel;