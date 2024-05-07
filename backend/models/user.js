// models/user.js
import mongoose from "mongoose";

const choseRole = ['admin', 'user', 'stackholder'];

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: choseRole // Specify the enum for role field
  }
});

const User = mongoose.model('User', userSchema);

export default User;
