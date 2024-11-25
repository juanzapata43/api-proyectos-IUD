import mongoose from 'mongoose';
const { Schema } = mongoose;

const ClientSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  creationDate: { type: Date, default: Date.now },
  updateDate: { type: Date }
});

const Client = mongoose.model('Client', ClientSchema);

export default Client;