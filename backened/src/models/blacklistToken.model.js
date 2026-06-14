const mongoose = require('mongoose');

const blacklisTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // 24 hrs
    }
});
module.exports = mongoose.model('blacklistToken', blacklisTokenSchema);