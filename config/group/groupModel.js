import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: [
      "group a",
      "group b",
      "group c",
      "group d",
      "group e",
      "group f",
      "group g",
      "group h",
    ],
    trim: true,
    unique: true,
  },
});
export const Group = mongoose.model("Group", groupSchema);
