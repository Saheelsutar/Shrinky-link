import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const userSchema = new Schema({
  url: { type: String, required: true},
  shortUrl: { type: String, required: true }
});

// Use existing model if available, otherwise create a new one
const User = models?.User || model("User", userSchema);

export default User;
