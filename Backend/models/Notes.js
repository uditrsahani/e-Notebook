import mongoose, {model} from "mongoose";
const { Schema } = mongoose;

const NotesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  decription: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: "General"
  },
  date: {
    type: Date,
    default: Date.now
  },
});

export default model('notes', NotesSchema)