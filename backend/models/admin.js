import mongoose from "mongoose";

let schema = mongoose.Schema;

const adminSchema = new schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});
let Admin = mongoose.model("Admin", adminSchema);

export default Admin;
