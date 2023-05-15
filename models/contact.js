const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//* Contact Schema

const contactSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    number: {type: Number, required: false}
});

const Reachout = mongoose.model('Reachout', contactSchema);

module.exports = Reachout;