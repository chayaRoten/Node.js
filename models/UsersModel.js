const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    token: String,
  
});
const UsertModel = mongoose.model("users", usersSchema);
module.exports = {UsertModel};