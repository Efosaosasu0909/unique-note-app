import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 3,
      max: 15,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      min: 3,
      max: 15,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      min: 3,
      max: 100,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 500,
      trim: true,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("Users", UserSchema);
export default User;
