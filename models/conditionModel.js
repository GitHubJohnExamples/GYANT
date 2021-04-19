const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conditionSchema = new Schema({
    code: { type: String, require: true, index: true, unique: true, sparse: true },
    conditionName: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

const Condition = mongoose.model('Condition', conditionSchema);
module.exports = Condition;