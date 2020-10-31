const mongoose = require('mongoose');
const { schema } = require('./user.model');

const Schema = mongoose.Schema;

const exerciseSchema = Schema({
    username:{ type: String, required: true },
    description:{ type: String, required: true, minlength:10 },
    duration:{ type: Number, required: true},
    date :{ type: Date, required: true},
}, {
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;