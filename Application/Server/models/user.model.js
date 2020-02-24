const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        // Username must be unique
        unique: true,
        // Trims whitespaces at the end
        trim: true,
        // At least 3 characters long
        minLength: 3
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 3
    }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;