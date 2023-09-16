import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, minlength: 3, maxlength: 30 },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
  },
  password: {
    type: String,
    trim: true,
    required: [true, "can't be blank"],
    minlength: 8,
    maxlength: 60,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
