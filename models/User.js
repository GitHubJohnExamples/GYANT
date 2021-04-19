const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, require: true, index:true, unique:true, sparse:true},
  password: { type: String, require: true},
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema);
module.exports = User;