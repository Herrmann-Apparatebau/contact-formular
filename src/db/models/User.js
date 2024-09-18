import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  zipCode: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  ozon: { type: Boolean, required: true },
  colon: { type: Boolean, required: true },
  veterinary: { type: Boolean, required: true },
  disposables: { type: Boolean, required: true },
});

const User =
  mongoose.models.User || mongoose.model("User", userSchema);

export default User;