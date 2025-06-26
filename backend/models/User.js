import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  college: String,
  role: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
