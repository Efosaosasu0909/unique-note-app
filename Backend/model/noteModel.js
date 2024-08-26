import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    tag: {
      type: String,
      default: "Public",
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },

    postedBy: {
      type: ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

const Notes = mongoose.model("Notes", noteSchema);
export default Notes;
