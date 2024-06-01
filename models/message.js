const { text } = require('express');
const mongoose = require('../db');

const messageSchema = new mongoose.Schema(
    {
        text: String,
        createdAt: {type: Date, default: Date.now}
    });

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;